import { Divider } from 'semantic-ui-react';
import { VideoPreviewData } from '../../common/types';
import VideoPreview from '../VideoPreview/VideoPreview'
import styles from './VideoGrid.module.scss';

export interface VideoGridProps {
  title: string
  videos: VideoPreviewData[];
  hideDivider?: boolean
}

/** Collection of videos, layed out in a grid, that are somehow related. */
const VideoGrid: React.FC<Readonly<VideoGridProps>> = function (props) {
  if (!props.videos?.length) {
    return <div />;
  }

  const videoPreviews = props.videos
      .map((item, idx) => <VideoPreview orientation='vertical' video={item} key={idx} />)

  return (
    <>
      <h4 className={styles.title}>{props.title}</h4> {/* TOOD Move to parent? */}
      <div className={styles.videoGrid}>
        {videoPreviews}
      </div>
      { props.hideDivider || <Divider /> /* TOOD Move to parent? */}
    </>
  );
}

export default VideoGrid;
