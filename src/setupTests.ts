import Enzyme from 'enzyme';

// Offical React 17 adapter is not yet available
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Configure Enzyme for React 17
Enzyme.configure({ adapter: new Adapter() });
