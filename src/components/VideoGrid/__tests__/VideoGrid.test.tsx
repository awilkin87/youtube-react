import { shallow } from "enzyme";
import { MockVideo } from "../../../common/types";
import VideoGrid from '../VideoGrid';

describe('VideoGrid', () => {
  test('Renders VideoGrid w/ divider', () => {
    const wrapper = shallow(<VideoGrid title='Grid Title'
        videos={new Array(12).fill(MockVideo)} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders VideoGrid w/o divider', () => {
    const wrapper = shallow(<VideoGrid hideDivider title='Grid Title'
        videos={new Array(12).fill(MockVideo)} />);
    expect(wrapper).toMatchSnapshot();
  });
});
