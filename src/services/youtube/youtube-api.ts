import API_KEY from './api-key';

const youtube = window.gapi.client.youtube;

let initalized = false;

async function loadYoutubeApi() {
  return window.gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  })
}

async function init() {
  if (initalized) {
    return;
  }
  await loadYoutubeApi();
  initalized = true;
}

export async function fetchPopularVideos(amount: number = 12, loadDescription: boolean = false, nextPageToken?: string) {
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

  return youtube.videos.list({
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    regionCode: 'US',
    maxResults: amount,
    pageToken: nextPageToken,
    fields
  });
}
