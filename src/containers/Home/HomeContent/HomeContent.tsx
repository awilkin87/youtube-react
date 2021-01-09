import Recommendations from '../Recommendations/Recommendations';
import styles from './HomeContent.module.scss';

/** Home content screen, containing suggested videos. */
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.responsiveVideoGridContainer} >
        <Recommendations title='Trending' />
      </div>
    </div>
  );
}
