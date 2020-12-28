import { Divider } from 'semantic-ui-react';
import VideoPreview from '../VideoPreview/VideoPreview'
import styles from './VideoGrid.module.scss';

export interface VideoGridProps {
  title: string
  hideDivider?: boolean
}

/** Collection of videos, layed out in a grid, that are somehow related. */
const VideoGrid: React.FunctionComponent<Readonly<VideoGridProps>> = function (props) {
  return (
    <>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.videoGrid}>
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
        <VideoPreview orientation='vertical' />
      </div>
      { props.hideDivider || <Divider /> }
    </>
  );
}

export default VideoGrid;
