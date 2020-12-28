import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import styles from './Watch.module.scss';

export default function Watch() {
  return (
    <>
      <RelatedVideos />
      <div style={{ maxWidth: '80%' }}>
        <Video id='-7fuHEEmEjs' />
      </div>
    </>
  );
}
