import API_KEY from './api-key';

export type YoutubeClientPromise = Promise<typeof window.gapi.client.youtube>;

let CLIENT_PROMISE: YoutubeClientPromise;

export function getYoutubClient(): YoutubeClientPromise {
  // Ensures there aren't multiple concurrent initializations
  if (!CLIENT_PROMISE) {
    CLIENT_PROMISE = initApi();
  }

  return CLIENT_PROMISE;
}

async function initApi() {
  await loadGoogleClient();
  await loadYoutubeApi();
  return window.gapi.client.youtube;
}

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
