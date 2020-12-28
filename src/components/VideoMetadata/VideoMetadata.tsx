import { Divider } from 'semantic-ui-react';
import styles from './VideoMetadata.module.scss';

export interface VideoMetaDataProps {
  title: string;
  viewCount: number;
}

const VideoMetaData: React.FunctionComponent<Readonly<VideoMetaDataProps>> = function (props) {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <div className={styles.stats}>
        <span>{props.viewCount.toLocaleString()} views</span>
        <div>
          {/* TODO */}
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default VideoMetaData;