import VideoPreview from '../VideoPreview/VideoPreview';
import NextUpVideo from './NextUpVideo/NextUpVideo';
import styles from './RelatedVideos.module.scss';

export default function RelatedVideos() {
  return (
    <div className={styles.relatedVideos}>
      <NextUpVideo />
      <VideoPreview orientation='horizontal' />
      <VideoPreview orientation='horizontal' />
      <VideoPreview orientation='horizontal' />
    </div>
  )
}
