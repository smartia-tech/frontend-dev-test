import { render, screen } from '@testing-library/react'
import ListContainer from '../components/launchListContainer'

const listContainerId = 'list-container'
const listId = 'list';

test("render error message when provided",() => {
    const message = "Network Error"
    render(<ListContainer errorMessage={message}/>)
    const element = screen.getByTestId(listContainerId)
    expect(element).toHaveTextContent(message)
})

test('renders loading indicatior', () => {
    render(<ListContainer isLoading={true} />);
    const element = screen.getByTestId(listContainerId)
    expect(element).toHaveTextContent('Loading')
});

test('renders list when there is no error or loading', () => {
    render(<ListContainer/>);
    const element = screen.getByTestId(listId)
    expect(element).toBeInTheDocument()
});