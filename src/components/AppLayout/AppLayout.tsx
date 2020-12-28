import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import styles from './AppLayout.module.scss';

/** Main application layout, placing the header nav bar at the top.  */
const AppLayout: React.FunctionComponent<Readonly<{}>> = function (props) {
  return (
    <div className={styles.appLayout}>
      <HeaderNav />
      {props.children}
    </div>
  );
}

export default AppLayout;