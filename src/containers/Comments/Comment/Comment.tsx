import { Button, Image } from 'semantic-ui-react';
import CommentRating from '../CommentRating/CommentRating';
import styles from './Comment.module.scss';

export interface CommentProps {
  // TODO
}

const Comment: React.FunctionComponent<Readonly<CommentProps>> = function (props) {
  return (
    <div className={styles.container}>
      <Image className={styles.avatar} src='http://via.placeholder.com/48x48' circular />
      <div>
        <div className={styles.userName}>User name</div>
        <span>Comment text</span>
        <div className={styles.actions}>
          <CommentRating likes={1} />
          <Button size='mini' compact>Reply</Button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
