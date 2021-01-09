import { shallow } from "enzyme";
import { MockVideo } from "../../../common/types";
import VideoPreview from '../VideoPreview';

describe('VideoPreview', () => {
  test('Renders vertical VideoPreview', () => {
    const wrapper = shallow(<VideoPreview video={MockVideo} orientation='vertical' />);
    expect(wrapper).toMatchSnapshot();
  });

  
  test('Renders horizontal VideoPreview', () => {
    const wrapper = shallow(<VideoPreview video={MockVideo} orientation='horizontal' />);
    expect(wrapper).toMatchSnapshot();
  });
});
