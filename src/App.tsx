import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';
import API_KEY from './apiKey';

/** Top-level parent component for the whole app. */
export default function App() {
  // Load YouTube API only on initial render
  useEffect(() => {
    loadYoutubeApi(API_KEY).then(() => alert('YouTube is now ready!'));
  }, []);

  return (
    <AppLayout>
      <Switch>
        <Route path='/watch' component={Watch} />
        <Route path='/' component={Home} />
      </Switch>
    </AppLayout>
  );
}

async function loadYoutubeApi(apiKey: string) {
  return window.gapi.client.init({
    apiKey: apiKey,
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  })
}
