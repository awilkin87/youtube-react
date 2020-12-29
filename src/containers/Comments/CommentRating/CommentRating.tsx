import { Icon } from 'semantic-ui-react';
import styles from './CommentRating.module.scss';

export interface CommentRatingProps {
  likes: number;
}

const CommentRating: React.FunctionComponent<Readonly<CommentRatingProps>> = function ({ likes }) {
  return (
    <div className={styles.container}>
      <div className={styles.thumbsUp}>
        <Icon name='thumbs up' />
        <span>{likes || null}</span>
      </div>
      <div className={styles.thumbsDown}>
        <Icon name='thumbs down' />
      </div>
    </div>
  );
}

export default CommentRating;
