import VideoPreview from '../../components/VideoPreview/VideoPreview';
import styles from './Home.module.scss';

/** Home content screen, containing suggested videos. */
export default function Home() {
  return (
    <div className={styles.home}>
      <VideoPreview />
    </div>
  );
}
