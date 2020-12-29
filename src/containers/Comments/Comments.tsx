import AddComment from './AddComment/AddComment';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import styles from './Comments.module.scss';

export default function Comments() {
  return (
    <>
      <CommentsHeader commentCount={4056} />
      <AddComment />
    </>
  );
}
