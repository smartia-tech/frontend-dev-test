import { render } from '@testing-library/react';
import Launch from './index';

describe('Launch', () => {
  it('should match snapshot', () => {
    const props = {
      name: 'SatPad',
      image: 'image',
      launchDate: '12/11/2021',
      cores: [],
    };

    // eslint-disable-next-line
    const { container } = render(<Launch {...props} />);

    expect(container).toMatchSnapshot();
  });
});
