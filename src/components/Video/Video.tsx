import styles from './Video.module.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export interface VideoProps {
  id: string
}

const Video: React.FunctionComponent<Readonly<VideoProps>> = function (props) {
  // TODO Enable autoplaying after development
  const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1&modestbranding=1`;
  return (
    <div className={styles.videoContainer}>
      <div className={styles.video}>
        <iframe className={styles.videoPlayer}
          title='video'
          src={embedUrl}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen />
      </div>
    </div>
  );
}

export default Video;