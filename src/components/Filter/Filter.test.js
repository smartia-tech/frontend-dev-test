import { render } from '@testing-library/react';
import Filter from './index';

describe('Filter', () => {
  it('should match snapshot', () => {
    const { container } = render(<Filter handleInputChange={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
