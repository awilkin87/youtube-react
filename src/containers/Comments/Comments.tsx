import AddComment from './AddComment/AddComment';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import Comment from './Comment/Comment';
import styles from './Comments.module.scss';

export default function Comments() {
  return (
    <>
      <CommentsHeader commentCount={4056} />
      <AddComment />
      <Comment />
      <Comment />
      <Comment />
    </>
  );
}
