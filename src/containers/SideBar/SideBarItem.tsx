import { Icon, SemanticICONS } from 'semantic-ui-react';
import SideBarClickableItem from './SideBarClickableItem';
import styles from './SideBarItem.module.scss';

/** React props for SideBarItem. */
export interface SideBarItemProps {
  highlight?: boolean,
  icon: SemanticICONS,
  label: string
}

/** Clickable sidebar menu item with a static icon and label. */
const SideBarItem: React.FunctionComponent<Readonly<SideBarItemProps>> = function (props) {
  const highlightStyle = props.highlight ? styles.highlight : null;
  return (
    <SideBarClickableItem className={[styles.sidebarItem, highlightStyle].join(' ')}>
      <div className={styles.alignmentContainer}>
        <span><Icon size='large' name={props.icon} /></span>
        <span>{props.label}</span>
      </div>
    </SideBarClickableItem>
  );
}

export default SideBarItem;