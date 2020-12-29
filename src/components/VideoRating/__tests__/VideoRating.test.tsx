import { shallow } from 'enzyme'
import VideoRating from '../VideoRating'

test('Render VideoRating', () => {
  const wrapper = shallow(<VideoRating likes={10} dislikes={10} />);
  expect(wrapper).toMatchSnapshot();
});
