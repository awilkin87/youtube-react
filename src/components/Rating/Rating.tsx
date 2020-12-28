import { Icon, Progress } from 'semantic-ui-react';
import styles from './Rating.module.scss';

export interface RatingProps {
  likes: number;
  dislikes: number;
}

const Rating: React.FunctionComponent<Readonly<RatingProps>> = function ({ likes, dislikes }) {
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

export default Rating;