import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Image, Input, Menu, Icon } from 'semantic-ui-react';
import logo from '../../assets/images/logo.jpg';
import styles from './HeaderNav.module.scss';

/** Top nav bar. */
export default function HeaderNav() {
  return (
    <Menu borderless className={styles.topMenu} fixed='top'>
      <Menu.Item header className={styles.left}>
        <Link to='/'>
          <Image src={logo} size='tiny' />
        </Link>
      </Menu.Item>

      <Menu.Item className={styles.center}>
        <Form className={styles.search}>
          <Form.Field>
            <Input placeholder='Search' size='small' action='Go' />
          </Form.Field>
        </Form>
      </Menu.Item>

      <Menu.Item position='right'>
        <Menu.Item>
          <Icon className={styles.headerIcon} name='video camera' size='large' />
        </Menu.Item>
        <Menu.Item>
          <Icon className={styles.headerIcon} name='grid layout' size='large' />
        </Menu.Item>
        <Menu.Item>
          <Icon className={styles.headerIcon} name='chat' size='large' />
        </Menu.Item>
        <Menu.Item>
          <Icon className={styles.headerIcon} name='alarm' size='large' />
        </Menu.Item>
        <Menu.Item name='avatar'>
          <Image src='http://via.placeholder.com/80x80' avatar />
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );
}