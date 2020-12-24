import { Divider, Menu } from 'semantic-ui-react';
import './SideBar.scss';
import SideBarHeader from './SideBarHeader';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  return (
    <Menu borderless vertical stackable fixed='left' className='side-nav'>
      <SideBarItem highlight label='Home' icon='home' />
      <SideBarItem label='Trending' icon='fire' />
      <SideBarItem label='Followers' icon='users' />
      <Divider />
      <SideBarHeader title='Library' />
      <SideBarItem label='History' icon='history' />
      <SideBarItem label='Watch Later' icon='clock' />
      <SideBarItem label='Liked Videos' icon='thumbs up' />
      <Divider />
      <SideBarHeader title='More from YouTube' />
      <SideBarItem label='Movies and Shows' icon='film' />
      <Divider />
      <SideBarItem label='Report History' icon='flag' />
      <SideBarItem label='Help' icon='help circle' />
      <SideBarItem label='Send Feedback' icon='comment' />
      <Divider />
    </Menu>
  );
}