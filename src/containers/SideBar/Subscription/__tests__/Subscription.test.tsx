import { shallow } from "enzyme";
import Subscription from '../Subscription';

describe('SideBar Subscription', () => {
  test('Renders Subscription w/ no videos and not broadcasting', () => {
    const wrapper = shallow(<Subscription name="MySubscription" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders Subscription w/ new videos and not broadcasting', () => {
    const wrapper = shallow(<Subscription name="MySubscription" newVideos={10} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders Subscription w/ no videos and is broadcasting', () => {
    const wrapper = shallow(<Subscription name="MySubscription" broadcasting />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders Subscription w/ new videos and is broadcasting', () => {
    const wrapper = shallow(<Subscription name="MySubscription" newVideos={10} broadcasting />);
    expect(wrapper).toMatchSnapshot();
  });
});