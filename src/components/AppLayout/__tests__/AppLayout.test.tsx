import { shallow } from 'enzyme'
import AppLayout from '../AppLayout'

describe('AppLayout', () => {
  test('Render AppLayout with no childern', () => {
    const wrapper = shallow(<AppLayout />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Render AppLayout with no child', () => {
    const wrapper = shallow(
      <AppLayout>
        <div>Child 1</div>
      </AppLayout>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Render AppLayout with two childern', () => {
    const wrapper = shallow(
      <AppLayout>
        <div>Child 1</div>
        <div>
          <p>Child 2A</p>
          <span>Child 2B</span>
        </div>
      </AppLayout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
