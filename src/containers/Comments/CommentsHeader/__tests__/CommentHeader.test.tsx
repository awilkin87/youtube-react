import { shallow } from "enzyme";
import CommentHeader from '../CommentsHeader';

describe('CommentHeader', () => {
  test('Renders CommentHeader with non-zero comment count', () => {
    const wrapper = shallow(<CommentHeader commentCount={1000} />);
    expect(wrapper).toMatchSnapshot();
  });

  
  test('Renders CommentHeader with zero comment count', () => {
    const wrapper = shallow(<CommentHeader commentCount={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
