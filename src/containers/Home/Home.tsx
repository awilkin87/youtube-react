import VideoGrid from '../../components/VideoGrid/VideoGrid';
import VideoPreview from '../../components/VideoPreview/VideoPreview';
import styles from './Home.module.scss';

/** Home content screen, containing suggested videos. */
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.responsiveVideoGridContainer} >
        <VideoGrid title='Trending' />
        <VideoGrid title='Autos &amp; Vehicles' hideDivider />
      </div>
    </div>
  );
}
