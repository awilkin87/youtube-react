import { useRef } from 'react';
import { Form, Image, TextArea } from 'semantic-ui-react';
import styles from './AddComment.module.scss';

export default function AddComment() {
  const textInput = useRef(null);

  return (
    <div className={styles.container}>
      <Image className={styles.userAvatar} src='http://via.placeholder.com/48x48' circular />
      <Form>
        {/* TODO Make this auto expand as text is typed */}
        <Form.TextArea control={TextArea} ref={textInput} rows={1} placeholder='Add a public comment...' />
      </Form>
    </div>
  );
}
