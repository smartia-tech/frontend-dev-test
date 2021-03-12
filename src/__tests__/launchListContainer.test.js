import { render, screen } from '@testing-library/react'
import ListContainer from '../components/launchListContainer'

const listContainerId = 'list-container'
const listId = 'list';
const loaderId = "loader"

test("render error message when provided",() => {
    const message = "Network Error"
    render(<ListContainer errorMessage={message}/>)
    const element = screen.getByTestId(listContainerId)
    expect(element).toHaveTextContent(message)
})

test('renders loading indicatior', () => {
    render(<ListContainer isLoading={true} />);
    const element = screen.getByTestId(loaderId)
    expect(element).toBeInTheDocument()
});

test('renders list when there is no error or loading', () => {
    render(<ListContainer/>);
    const element = screen.getByTestId(listId)
    expect(element).toBeInTheDocument()
});