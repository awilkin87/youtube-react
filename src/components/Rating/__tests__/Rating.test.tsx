import { shallow } from 'enzyme'
import Rating from '../Rating'

test('Render Rating', () => {
  const wrapper = shallow(<Rating likes={10} dislikes={10} />);
  expect(wrapper).toMatchSnapshot();
});
