import { Image } from 'semantic-ui-react';
import styles from './VideoPreview.module.scss';

/** Video preview containing thumbnail image and video information. */
export default function VideoPreview() {
  return (
    <div className={styles.videoPreview}>
      <div className={styles.thumbnail}>
        <Image src='http://via.placeholder.com/210x118' />
        <div className={styles.timeLabel}>
          <span>05:22</span>
        </div>
      </div>
      <div className={styles.videoInfo}>
        <div className={styles.videoTitle}>Video title</div>
        <div className={styles.channelTitle}>Channel title</div>
        <div>2.1M views • 2 days ago</div>
      </div>
    </div>
  );
}
