import { Divider, Menu } from 'semantic-ui-react';
import './SideBar.scss';
import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';
import SideBarItem from './SideBarItem';
import { MockSubscriptions } from './Subscriptions/Subscription';

export default function SideBar() {
  return (
    <Menu borderless vertical stackable fixed='left' className='side-nav'>
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