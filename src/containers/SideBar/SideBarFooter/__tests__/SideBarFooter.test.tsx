import { shallow } from "enzyme";
import SideBarFooter from '../SideBarFooter';

test('Renders SideBarFooter', () => {
  const wrapper = shallow(<SideBarFooter />);
  expect(wrapper).toMatchSnapshot();
});