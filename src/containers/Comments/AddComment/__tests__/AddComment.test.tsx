import { shallow } from 'enzyme'
import AddComment from '../AddComment'

test('Render AddComment', () => {
  const wrapper = shallow(<AddComment />);
  expect(wrapper).toMatchSnapshot();
});
