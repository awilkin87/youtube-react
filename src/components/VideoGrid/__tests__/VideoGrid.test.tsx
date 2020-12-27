import { shallow } from "enzyme";
import VideoGrid from '../VideoGrid';

describe('VideoGrid', () => {
  test('Renders VideoGrid w/ divider', () => {
    const wrapper = shallow(<VideoGrid title='Grid Title' />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders VideoGrid w/o divider', () => {
    const wrapper = shallow(<VideoGrid hideDivider title='Grid Title' />);
    expect(wrapper).toMatchSnapshot();
  });
});
