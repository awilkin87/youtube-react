import styles from './Comments.module.scss';
import CommentsHeader from './CommentsHeader/CommentsHeader';

export default function Comments() {
  return (
    <CommentsHeader commentCount={4056} />
  );
}
