import { shallow } from "enzyme";
import VideoInfoBox from '../VideoInfoBox';

describe('VideoPreview', () => {
  test('Renders collapsed VideoInfoBox', () => {
    const wrapper = shallow(<VideoInfoBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
