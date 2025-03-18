import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deployment test message', () => {
  render(<App />);
  const headerElement = screen.getByText(/Test Deployment - March 18/i);
  expect(headerElement).toBeInTheDocument();
});