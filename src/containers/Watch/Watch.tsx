import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import styles from './Watch.module.scss';
import VideoMetaData from '../../components/VideoMetadata/VideoMetadata';

export default function Watch() {
  return (
    <div className={styles.watchGrid}>
      <div className={styles.video}>
        <Video id='-7fuHEEmEjs' />
      </div>
      <div className={styles.metadata}>
        <VideoMetaData title='Video Title' viewCount={1000} />
      </div>
      <div className={styles.infoBox} style={{ width: '100%', height: '100px', background: '#BD10E0' }}>
        Video Info Box
        </div>
      <div className={styles.comments} style={{ width: '100%', height: '100px', background: '#9013FE' }}>
        Comments
        </div>
      <div className={styles.relatedVideos}>
        <RelatedVideos />
      </div>
    </div>
  );
}
