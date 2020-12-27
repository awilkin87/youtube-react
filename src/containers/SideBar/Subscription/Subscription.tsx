import PropType, { InferProps } from 'prop-types';
import { Icon, Image } from 'semantic-ui-react';
import SideBarClickableItem from '../SideBarClickableItem/SideBarClickableItem';
import styles from './Subscription.module.scss';

/** React props for a sidebar Subscription. */
export type SidebarSubscriptionProps = InferProps<typeof propTypes>;

/** Clickable sidebar menu item for accessing and displaying information about a subscription. */
const Subscription: React.FunctionComponent<Readonly<SidebarSubscriptionProps>> = function (props) {
  let rightElement;
  if (props.broadcasting) {
    rightElement = <Icon name='podcast' />;
  } else {
    const newVideoCount = props.newVideos || 0;
    if (newVideoCount > 0) {
      rightElement = <span className={styles.videoCount}>{props.newVideos}</span>;
    }
  }

  return (
    <SideBarClickableItem>
      <div className={styles.subscription}>
        <span className={styles.leftContainer}>
          <Image avatar src='http://via.placeholder.com/28x28' />
          <span className={styles.label}>
            {props.name}
          </span>
        </span>
        {rightElement}
      </div>
    </SideBarClickableItem>
  );
}

const propTypes = {
  /** Subscription channel name. */
  name: PropType.string.isRequired,
  /** True if channel broadcasting live. */
  broadcasting: PropType.bool,
  /** Number of new videos not yet watched. */
  newVideos: PropType.number
}

Subscription.propTypes = propTypes;

export default Subscription;

/** Mock subscription while building out the app. */
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
