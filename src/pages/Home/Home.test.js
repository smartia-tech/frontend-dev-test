import { render } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
