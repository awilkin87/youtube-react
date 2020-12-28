import { Button, Icon, Divider } from 'semantic-ui-react';
import Rating from '../Rating/Rating';
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
        <span>{props.viewCount.toLocaleString()} views &#5867; Aug 14, 2017</span>
        <div className={styles.actions}>
          <Rating likes={75} dislikes={25} />
          <Button basic icon labelPosition='left'>
            <Icon name='share' />
            Share
          </Button>
          <Button basic icon labelPosition='left'>
            <Icon name='add circle' />
            Save
          </Button>
          <Button basic icon>
            <Icon name='ellipsis horizontal' />
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default VideoMetaData;