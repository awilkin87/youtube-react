import { Icon, Menu, Image } from 'semantic-ui-react';
import PropType, { InferProps } from 'prop-types';
import './Subscription.scss';

export type SidebarSubscriptionProps = InferProps<typeof Subscription.propTypes>;

function Subscription(props: Readonly<SidebarSubscriptionProps>) {
  let rightElement;
  if (props.broadcasting) {
    rightElement = <Icon name='podcast' />;
  } else {
    const newVideoCount = props.newVideos || 0;
    if (newVideoCount > 0) {
      rightElement = <span className='new-video-count'>{props.newVideos}</span>;
    }
  }

  return (
    <Menu.Item className='sidebar-clickable'>
      <div className='subscription'>
        <span className='subscription-left-container'>
          <Image avatar src='http://via.placeholder.com/28x28' />
          <span className='subscription-name'>
            {props.name}
          </span>
        </span>
        {rightElement}
      </div>
    </Menu.Item>
  );
}

Subscription.propTypes = {
  name: PropType.string.isRequired,
  broadcasting: PropType.bool,
  newVideos: PropType.number
}

export function MockSubscriptions() {
  return (
    <>
      <Subscription name='MusicChannel' broadcasting />
      <Subscription name='Coursera' newVideos={10} />
      <Subscription name='TEDx Talks' newVideos={23} />
      <Subscription name='Stanford iOS' />
      <Subscription name='Udacity' newVideos={114} />
      <Subscription name='Best Most Awesomest Channel Ever' newVideos={5} />
    </>
  );
}

export default Subscription;