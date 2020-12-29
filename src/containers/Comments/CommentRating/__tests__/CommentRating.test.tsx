import { shallow } from "enzyme";
import CommentRating from '../CommentRating';

describe('CommentRating', () => {
  test('Renders CommentRating with non-zero likes', () => {
    const wrapper = shallow(<CommentRating likes={2} />);
    expect(wrapper).toMatchSnapshot();
  });

  
  test('Renders CommentHeader with zero likes', () => {
    const wrapper = shallow(<CommentRating likes={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
