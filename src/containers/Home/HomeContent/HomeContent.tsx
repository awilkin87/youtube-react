import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVideoCategories } from '../../../store/rootReducer';
import { videoCategoriesRequest } from '../../../store/VideoCategories/actions';
import Recommendations from '../Recommendations/Recommendations';
import styles from './HomeContent.module.scss';

/** Home content screen, containing suggested videos. */
export default function Home() {
  const videoCategories = useSelector(selectVideoCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(videoCategories).length === 0) {
      dispatch(videoCategoriesRequest());
    }
  }, [videoCategories, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.responsiveVideoGridContainer} >
        <Recommendations />
      </div>
    </div>
  );
}
