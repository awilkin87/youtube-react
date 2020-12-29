import SideBar from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';

/** Home screen container component. Presents the side nav bar and suggested video content. */
export default function Home() {
  return (
    <>
      <SideBar />
      <HomeContent />
    </>
  );
}
