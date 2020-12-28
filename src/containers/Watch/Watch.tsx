import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoMetaData from '../../components/VideoMetadata/VideoMetadata';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';
import styles from './Watch.module.scss';

export default function Watch() {
  return (
    <div className={styles.watchGrid}>
      <div className={styles.video}>
        <Video id='-7fuHEEmEjs' />
      </div>
      <div className={styles.metadata}>
        <VideoMetaData title='Video Title' viewCount={1000} />
      </div>
      <div className={styles.infoBox}>
        <VideoInfoBox />
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
