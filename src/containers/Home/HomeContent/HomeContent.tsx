import VideoGrid from '../../../components/VideoGrid/VideoGrid';
import styles from './HomeContent.module.scss';

/** Home content screen, containing suggested videos. */
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.responsiveVideoGridContainer} >
        <VideoGrid title='Trending' />
        <VideoGrid title='Autos &amp; Vehicles' hideDivider />
      </div>
    </div>
  );
}
