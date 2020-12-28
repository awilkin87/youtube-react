import { useState } from 'react';
import { Button, Image } from 'semantic-ui-react';
import styles from './VideoInfoBox.module.scss';

export interface VideoInfoBoxProps {
  // TODO
}

const VideoInfoBox: React.FunctionComponent<Readonly<VideoInfoBoxProps>> = function (props) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.container}>
      <Image className={styles.channelImage} src='http://via.placeholder.com/48x48' circular />
      <div className={styles.videoInfo}>
        <div className={styles.channelName}>Channel Name</div>
        <div className={styles.subscriberCount}>80K Subscribers</div>
      </div>
      <Button className={styles.subscribeButton} color='red'>Subscribe</Button>
      <div className={styles.description}>
        <div className={collapsed ? styles.collapsed : styles.expanded}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor massa. Duis in
            suscipit urna. Nunc vel rhoncus lectus. Fusce facilisis mauris at libero mattis porta.
            Donec elementum orci ac consectetur venenatis. In scelerisque, mauris efficitur volutpat
            pellentesque, odio mi congue nisl, sit amet accumsan ipsum nibh at odio.
        </p>
        </div>
        <Button compact onClick={() => setCollapsed(!collapsed)}>
          Show {collapsed ? 'More' : 'Less'}
        </Button>
      </div>
    </div>
  );
}

export default VideoInfoBox;