import { VideoPreviewData } from '../../common/types';
import API_KEY from './api-key';

let YOUTUBE_CLIENT: typeof window.gapi.client.youtube;
let pendingInit: Promise<void>;

export async function init() {
  async function loadGoogleClient() {
    return new Promise<void>((resolve, reject) => {
      window.gapi.load('client', {
        callback: resolve,
        onerror: reject
      });
    });
  }

  async function loadYoutubeApi() {
    return window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    })
  }

  async function initApi() {
    await loadGoogleClient();
    await loadYoutubeApi();
    YOUTUBE_CLIENT = window.gapi.client.youtube;
  }

  // Ensures there aren't multiple concurrent initializations
  if (!pendingInit) {
    pendingInit = initApi();
  }

  return pendingInit;
}

/** API response for listing video previews.  */
export interface VideoPreviewResponse {
  /** List of video previews. */
  videos: VideoPreviewData[];
  /** Token for retrieving the next page of videos. */
  nextPageToken?: any;
}

/** 
 * Fetch the most popular trending videos.
 * @param amount number of videos to fetch
 * @param loadDescription if the video description should be included in the fetch
 * @param nextPageToken the token for obtaining the next page of videos on subsequent fetches
 */
export async function fetchPopularVideos(amount: number = 12, loadDescription: boolean = false,
    nextPageToken?: string): Promise<VideoPreviewResponse> {
  await init();

  let fields = '                  \
    nextPageToken,                \
    prevPageToken,                \
    items(                        \
      contentDetails / duration,  \
      id,                         \
      snippet(                    \
        channelId,                \
        channelTitle,             \
        localized / title,        \
        publishedAt,              \
        thumbnails / medium,      \
        title                     \
      ),                          \
      statistics / viewCount      \
    ),                            \
    pageInfo(totalResults)';

  if (loadDescription) {
    fields += ',items/snippet(description, localized / description)';
  }

  const response = await YOUTUBE_CLIENT.videos.list({
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    regionCode: 'US',
    maxResults: amount,
    pageToken: nextPageToken,
    fields
  });

  const videos = mapToVideoPreview(response.result);

  return {
    videos,
    nextPageToken: response.result.nextPageToken
  };
}

function mapToVideoPreview(response: gapi.client.youtube.VideoListResponse): VideoPreviewData[] {
  if (!response.items) {
    console.error('No videos returned');
    return [];
  }

  return response.items
    .filter(item => {
      if (!item.id) {
        console.error('Got a video with no id');
        return false;
      }
      return true;
    }).map(item => {

      const snippet = item.snippet;
      const thumbnail = snippet?.thumbnails?.medium?.url;
      const duration = item.contentDetails?.duration;
      const publishDate = new Date(snippet?.publishedAt ? Date.parse(snippet?.publishedAt) : 0);

      return {
        id: item.id,
        videoTitle: snippet?.localized?.title || snippet?.title || '! Error getting title',
        channelTitle: snippet?.channelTitle || '! Error geting channel',
        thumbnail: thumbnail || 'https://via.placeholder.com/320x180?text=!',
        viewCount: +(item.statistics?.viewCount || 0),
        duration: duration || '0:00',
        publishDate
      }
   });
}
