import { Menu } from 'semantic-ui-react';
import './SideBarHeader.scss';

export interface SideBarHeaderProps {
  title: string
}

export default function SideBarHeader(props: Readonly<SideBarHeaderProps>) {
  const heading = props.title || '';
  return (
    <Menu.Item>
      <Menu.Header className='sidebar-header'>{heading.toUpperCase()}</Menu.Header>
    </Menu.Item>
  );
}