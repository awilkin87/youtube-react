import { Image } from 'semantic-ui-react';
import styles from './VideoPreview.module.scss';

export interface VideoPreviewProps {
  orientation: 'horizontal' | 'vertical';
}

/** Video preview containing thumbnail image and video information. */
const VideoPreview: React.FunctionComponent<Readonly<VideoPreviewProps>> = function (props) {
  return (
    <div className={`${styles.videoPreview} ${orientationStyle(props.orientation)}`}>
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

function orientationStyle(orientation: VideoPreviewProps['orientation']) {
  switch (orientation) {
    case 'horizontal':
      return styles.horizontal;
    case 'vertical':
      return styles.vertical;
  }
}

export default VideoPreview;
