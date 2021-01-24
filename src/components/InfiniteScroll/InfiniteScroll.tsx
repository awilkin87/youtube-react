import { PropsWithChildren, ReactPropTypes } from 'react';
import { Waypoint } from 'react-waypoint';
import { Loader } from 'semantic-ui-react';
import styles from './InfiniteScroll.module.scss';

type InfiniteScrollProps<P> = PropsWithChildren<P> & {
  showLoader?: boolean;
  bottomReached?: () => void;
}

export function InfiniteScroll<P>(props: InfiniteScrollProps<P>) {
  return (
    <>
      {props.children}
      <Waypoint onEnter={props.bottomReached}>
        <div className={styles.loaderContainer}>
          <Loader active={props.showLoader} inline='centered' />
        </div>
      </Waypoint>
    </>
  );
}
