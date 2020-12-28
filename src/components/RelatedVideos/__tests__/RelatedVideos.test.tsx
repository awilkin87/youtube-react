import { shallow } from "enzyme";
import RelatedVideos from '../RelatedVideos';

test('Renders RelatedVideos', () => {
  const wrapper = shallow(<RelatedVideos />);
  expect(wrapper).toMatchSnapshot();
});
