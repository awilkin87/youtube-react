import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';
import Home from './containers/Home/Home';

/** Top-level parent component for the whole app. */
export default function App() {
  return (
    <>
      <HeaderNav />
      <SideBar />
      <Home />
    </>
  );
}
