import React from 'react';
import { Menu, MenuItemProps } from "semantic-ui-react";
import styles from './SideBarClickableItem.module.scss';

/**
 * Sidebar menu item that is intended to take some action when clicked.
 */
const SideBarClickableItem: React.FunctionComponent<Readonly<MenuItemProps>> = function (props) {
  const newClassName = [props.className, styles.clickable].join(' ');
  return React.cloneElement(<Menu.Item {...props} />, { className: newClassName });
}

export default SideBarClickableItem;
