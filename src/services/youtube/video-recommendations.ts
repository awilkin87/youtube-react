import { VideoPreviewData } from '../../common/types';
import { getYoutubClient } from './load-client';

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
  const client = await getYoutubClient();

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

  const response = await client.videos.list({
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

      const preview: VideoPreviewData = {
        id: item.id,
        videoTitle: snippet?.localized?.title || snippet?.title || '! Error getting title',
        channelTitle: snippet?.channelTitle || '! Error geting channel',
        thumbnail: thumbnail || 'https://via.placeholder.com/320x180?text=!',
        viewCount: +(item.statistics?.viewCount || 0),
        duration: duration || '0:00',
        publishDate
      }

      return preview;
   });
}
