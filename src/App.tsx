import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';

/** Top-level parent component for the whole app. */
export default function App() {
  return (
    <>
      <HeaderNav />
      <SideBar />
    </>
  );
}
