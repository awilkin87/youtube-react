import { Icon, Menu, SemanticICONS } from 'semantic-ui-react';
import PropTypes, { InferProps } from 'prop-types';
import './SideBarItem.scss';

/* The 'icon' prop has a restricted range of valid strings (as determined by the SemanticICONS type).
   InferProps is not aware of these strings and so cannot generate the correct type, so we manually
   set 'icon' to the correct type. */
export interface SideBarItemProps extends InferProps<typeof SideBarItem.propTypes> {
  icon: SemanticICONS
}

function SideBarItem(props: Readonly<SideBarItemProps>) {
  const highlightClassName = props.highlight ? 'highlight' : null;
  return (
    <Menu.Item className={['sidebar-item', 'sidebar-clickable', highlightClassName].join(' ')}>
      <div className='sidebar-item-alignment-container'>
        <span><Icon size='large' name={props.icon} /></span>
        <span>{props.label}</span>
      </div>
    </Menu.Item>
  );
}

// TODO Is this even useful? Might not be if props are not coming from external API
SideBarItem.propTypes = {
  highlight: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default SideBarItem;