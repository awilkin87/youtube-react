import { Divider, Menu } from 'semantic-ui-react';
import SideBarFooter from './SideBarFooter/SideBarFooter';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import SideBarItem from './SideBarItem/SideBarItem';
import { MockSubscriptions } from './Subscription/Subscription';
import styles from './SideBar.module.scss';

/** Vertical sidebar menu. */
export default function SideBar() {
  return (
    <Menu borderless vertical stackable fixed='left' className={styles.sidebar}>
      <SideBarItem highlight label='Home' icon='home' />
      <SideBarItem label='Trending' icon='fire' />
      <SideBarItem label='Followers' icon='users' />
      <Divider />
      <SideBarHeader title='Library' />
      <SideBarItem label='History' icon='history' />
      <SideBarItem label='Watch later' icon='clock' />
      <SideBarItem label='Liked videos' icon='thumbs up' />
      <Divider />
      <SideBarHeader title='Subscriptions' />
      <MockSubscriptions />
      <Divider />
      <SideBarHeader title='More from YouTube' />
      <SideBarItem label='Movies &amp; Shows' icon='film' />
      <Divider />
      <SideBarItem label='Report history' icon='flag' />
      <SideBarItem label='Help' icon='help circle' />
      <SideBarItem label='Send Feedback' icon='comment' />
      <Divider />
      <SideBarFooter />
    </Menu>
  );
}