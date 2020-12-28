import { Button, Icon } from 'semantic-ui-react';
import styles from './CommentsHeader.module.scss';

export interface CommentsHeaderProps {
  commentCount: number;
}

const CommentsHeader: React.FunctionComponent<Readonly<CommentsHeaderProps>> = function (props) {
  return (
    <div className={styles.container}>
      <h4>{props.commentCount.toLocaleString()} Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort By
      </Button>
    </div>
  );
}

export default CommentsHeader;