import VideoGrid from '../../components/VideoGrid/VideoGrid';
import SideBar from '../SideBar/SideBar';
import styles from './Home.module.scss';

/** Home content screen, containing suggested videos. */
export default function Home() {
  return (
    <>
      <SideBar />
      <div className={styles.home}>
        <div className={styles.responsiveVideoGridContainer} >
          <VideoGrid title='Trending' />
          <VideoGrid title='Autos &amp; Vehicles' hideDivider />
        </div>
      </div>
    </>
  );
}
