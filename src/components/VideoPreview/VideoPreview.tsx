import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { shortenNumber } from '../../common/format-utils'
import { VideoPreviewData } from '../../common/types';
import styles from './VideoPreview.module.scss';

export interface VideoPreviewProps {
  /** The video to be previewed. */
  video: VideoPreviewData;
  /** 
   * If video information should be displayed below (vertical) or to the left (horizontal) of the
   * thumbnail image. 
   */
  orientation: 'horizontal' | 'vertical';
}

/** Video preview containing thumbnail image and video information. */
const VideoPreview: React.FunctionComponent<Readonly<VideoPreviewProps>> = function ({ video, orientation }) {
  return (
    <div className={`${styles.videoPreview} ${orientationStyle(orientation)}`}>
      <Link to={`/watch?v=${video.id}`}>
        <div className={styles.thumbnail}>
          <Image src={video.thumbnail} />
          <div className={styles.timeLabel}>
            <span>{video.duration}</span>
          </div>
        </div>
      </Link>

      <div className={styles.videoInfo}>
        <Link to={`/watch?v=${video.id}`}>
          <div className={styles.videoTitle}>
            {video.videoTitle}
          </div>
        </Link>

        <div className={styles.channelTitle}>{video.channelTitle}</div>

        <Link to={`/watch?v=${video.id}`}>
          <div>
            {shortenNumber(video.viewCount)} views
            &bull; <TimeAgo date={video.publishDate} live={false} title='' />
          </div>
        </Link>
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
