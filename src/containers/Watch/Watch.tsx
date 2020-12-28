import Video from '../../components/Video/Video';
import VideoPreview from '../../components/VideoPreview/VideoPreview';
import styles from './Watch.module.scss';

export default function Watch() {
  return (
    <div style={{maxWidth: '80%'}}>
      <Video id='-7fuHEEmEjs' />
      <VideoPreview orientation='horizontal' />
      <VideoPreview orientation='vertical' />
    </div>
  );
}
