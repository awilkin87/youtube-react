import { Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';

/** Top-level parent component for the whole app. */
export default function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path='/watch' component={Watch} />
        <Route path='/' component={Home} />
      </Switch>
    </AppLayout>
  );
}
