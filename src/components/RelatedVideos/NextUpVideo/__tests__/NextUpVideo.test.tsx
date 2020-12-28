import { shallow } from "enzyme";
import NextUpVideo from '../NextUpVideo';

test('Renders NextUpVideo', () => {
  const wrapper = shallow(<NextUpVideo />);
  expect(wrapper).toMatchSnapshot();
});
