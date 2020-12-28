import { Checkbox, Divider } from 'semantic-ui-react';
import VideoPreview from '../../VideoPreview/VideoPreview';
import styles from './NextUpVideo.module.scss';

export default function NextUpVideo() {
  return (
    <>
      <div className={styles.header}>
        <h4>Up next</h4>
        <div className={styles.toggle}>
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked />
        </div>
      </div>
      <VideoPreview orientation='horizontal' />
      <Divider />
    </>
  );
}
