import { shallow } from "enzyme";
import VideoPreview from '../VideoPreview';

describe('VideoPreview', () => {
  test('Renders vertical VideoPreview', () => {
    const wrapper = shallow(<VideoPreview orientation='vertical' />);
    expect(wrapper).toMatchSnapshot();
  });

  
  test('Renders horizontal VideoPreview', () => {
    const wrapper = shallow(<VideoPreview orientation='horizontal' />);
    expect(wrapper).toMatchSnapshot();
  });
});
