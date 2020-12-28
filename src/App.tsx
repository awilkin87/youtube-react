
import AppLayout from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';

/** Top-level parent component for the whole app. */
export default function App() {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}
