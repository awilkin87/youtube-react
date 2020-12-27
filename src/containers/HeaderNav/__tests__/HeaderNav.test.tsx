import { shallow } from "enzyme";
import HeaderNav from '../HeaderNav';

test('Renders HeaderNav', () => {
  const wrapper = shallow(<HeaderNav />);
  expect(wrapper).toMatchSnapshot();
});