import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application title', () => {
  render(<App />);
  const linkElement = screen.getByText(/SpaceX's Launches/i);
  expect(linkElement).toBeInTheDocument();
});
