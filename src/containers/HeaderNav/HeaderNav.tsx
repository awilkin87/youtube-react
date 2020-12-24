import { Form, Image, Input, Menu, Icon } from 'semantic-ui-react';
import './HeaderNav.scss'
import logo from '../../assets/images/logo.jpg';

export default function HeaderNav() {
  return (
    <Menu borderless className='top-menu' fixed='top'>
      <Menu.Item header className='left'>
        <Image src={logo} size='tiny' />
      </Menu.Item>

      <Menu.Item className='center'>
        <Form className='search'>
          <Form.Field>
            <Input placeholder='Search' size='small' action='Go' />
          </Form.Field>
        </Form>
      </Menu.Item>
      
      <Menu.Item position='right'>
        <Menu.Item>
          <Icon className='header-icon' name='video camera' size='large' />
        </Menu.Item>
        <Menu.Item>
          <Icon className='header-icon' name='grid layout' size='large' />
        </Menu.Item>
        <Menu.Item>
          <Icon className='header-icon' name='chat' size='large' />
        </Menu.Item>
        <Menu.Item>
          <Icon className='header-icon' name='alarm' size='large' />
        </Menu.Item>
        <Menu.Item name='avatar'>
          <Image src='http://via.placeholder.com/80x80' avatar />
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );
}