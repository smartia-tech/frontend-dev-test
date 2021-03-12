import { render, screen } from '@testing-library/react';
import List from '../components/launchList'

const listId = "list"

test('renders launch list', () => {
    render(<List/>);
    const element = screen.getByTestId(listId)
    expect(element).toBeInTheDocument();
});


test('renders no result screen when no data', () => {
    render(<List/>);
    const element = screen.getByTestId(listId)
    expect(element).toHaveTextContent('No Result');
});