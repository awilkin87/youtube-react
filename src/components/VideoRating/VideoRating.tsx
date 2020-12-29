import { Icon, Progress } from 'semantic-ui-react';
import styles from './VideoRating.module.scss';

export interface VideoRatingProps {
  likes: number;
  dislikes: number;
}

const VideoRating: React.FunctionComponent<Readonly<VideoRatingProps>> = function ({ likes, dislikes }) {
  const totalRatings = likes + dislikes;
  const precentLikes = totalRatings ? 100 * (likes / totalRatings) : 50;

  return (
    <div className={styles.container}>
      <div className={styles.thumbsUp}>
        <Icon name='thumbs up outline' />
        <span>{likes}</span>
      </div>
      <div className={styles.thumbsDown}>
        <Icon name='thumbs down outline' />
        <span>{dislikes}</span>
      </div>
      <Progress className={styles.ratingBar} percent={precentLikes} size='tiny' />
    </div>
  );
}

export default VideoRating;