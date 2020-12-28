import { shallow } from 'enzyme'
import VideoMetadata from '../VideoMetadata'

// This is probably not a good test as the view count output is dependent on locale.
// A dev running the tests in a different locale might get test failures.
describe('VideoMetadata', () => {
  test('Render VideoMetadata with zero views', () => {
    const wrapper = shallow(<VideoMetadata title='Video Title' viewCount={0} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Render VideoMetadata with views', () => {
    const wrapper = shallow(<VideoMetadata title='Video Title' viewCount={1000} />);
    expect(wrapper).toMatchSnapshot();
  });
});
