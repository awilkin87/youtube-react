import { shallow } from "enzyme";
import SideBarHeader from '../SideBarHeader';

test('Renders SideBarHeader', () => {
  const wrapper = shallow(<SideBarHeader title='Header Title' />);
  expect(wrapper).toMatchSnapshot();
});