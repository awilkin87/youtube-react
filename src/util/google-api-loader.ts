/*
  Not needed anymore. I just put the inital script in index.html. Makes more sense for this
  application anyway. Left old calls here as an example of wrapping legacy callback in async
  functions.
 */

export async function loadYoutubeApi(apiKey: string) {
  await loadGoogleApi();
  await loadGoogleClient();
  await initYoutubeClient(apiKey);
}


// Was having issues loading the client.js alone. The client namespace would not always be
// available when the callbacks were executed.Loading api.js, then the client, then initializing
// YouTube API seems to work better.

async function loadGoogleApi() {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/api.js";

  const promise = new Promise<Event>(resolve => {
    script.onload = event => { resolve(event) }
  });

  document.body.appendChild(script);

  return promise;
}

async function loadGoogleClient() {
  return new Promise<void>((resolve, reject) => {
    window.gapi.load('client', {
      callback: resolve,
      onerror: reject
    });
  });
}

async function initYoutubeClient(apiKey: string) {
  return window.gapi.client.init({
    apiKey: apiKey,
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  });
}
