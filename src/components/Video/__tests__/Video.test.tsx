import { shallow } from "enzyme";
import Video from '../Video';

test('Renders VideoPreview', () => {
  const wrapper = shallow(<Video id='Test123' />);
  expect(wrapper).toMatchSnapshot();
});