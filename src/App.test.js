import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deployment test message', () => {
  render(<App />);
  const headerElement = screen.getByText(/Test Deployment - March 14, 2025/i);
  expect(headerElement).toBeInTheDocument();
});