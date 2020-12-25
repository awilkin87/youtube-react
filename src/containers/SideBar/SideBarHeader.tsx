import { Menu } from 'semantic-ui-react';
import styles from './SideBarHeader.module.scss';

/** React props for SideBarHeader. */
export interface SideBarHeaderProps {
  title: string
}

/** Header for a subsection of the sidebar menu. */
const SideBarHeader: React.FunctionComponent<Readonly<SideBarHeaderProps>> = function (props) {
  return (
    <Menu.Item>
      <Menu.Header className={styles.sidebarHeader}>{props.title.toUpperCase()}</Menu.Header>
    </Menu.Item>
  );
}

export default SideBarHeader;