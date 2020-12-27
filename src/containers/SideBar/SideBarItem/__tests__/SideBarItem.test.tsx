import { shallow } from "enzyme";
import SideBarItem from '../SideBarItem';

describe('SideBarItem', () => {
  test('Renders SideBarItem w/ Highlight', () => {
    const wrapper = shallow(<SideBarItem highlight icon='home' label='Menu Label' />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders SideBarItem w/o Highlight', () => {
    const wrapper = shallow(<SideBarItem icon='home' label='Menu Label' />);
    expect(wrapper).toMatchSnapshot();
  });
});