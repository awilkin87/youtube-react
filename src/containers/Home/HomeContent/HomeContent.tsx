import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfiniteScroll } from '../../../components/InfiniteScroll/InfiniteScroll';
import { selectVideoCategories } from '../../../store/rootReducer';
import { videoCategoriesRequest } from '../../../store/VideoCategories/actions';
import Recommendations from '../Recommendations/Recommendations';
import styles from './HomeContent.module.scss';

/** Home content screen, containing suggested videos. */
export default function Home() {
  // This index approach assumes category list doesn't change after initial fetch.
  // May not be the case
  const [lastIndex, setLastIndex] = useState(0);

  const videoCategories = useSelector(selectVideoCategories);
  const categoryIds = Object.keys(videoCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryIds.length === 0) {
      dispatch(videoCategoriesRequest());
    }
  }, [categoryIds, dispatch]);

  const recommendations = categoryIds.slice(0, lastIndex)
    .map((categoryId, index) => <Recommendations categoryId={categoryId} key={index + 1} />);

  // TODO Show loading animation; handle categories that don't list trending videos
  // TODO Retain state in Redux so we can use the back button and not reload all the tending videos
  return (
    <div className={styles.container}>
      <div className={styles.responsiveVideoGridContainer} >
        <InfiniteScroll bottomReached={() => setLastIndex(lastIndex + 3)} >
          <Recommendations key={0} />
          {recommendations}
        </InfiniteScroll>
      </div>
    </div>
  );
}
