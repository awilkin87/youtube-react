import { shallow } from 'enzyme'
import Comment from '../Comment'

test('Render Comment', () => {
  const wrapper = shallow(<Comment />);
  expect(wrapper).toMatchSnapshot();
});
