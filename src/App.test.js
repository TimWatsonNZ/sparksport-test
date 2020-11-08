import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Search Page', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText(/Search for a movie/i);
  expect(searchElement).toBeInTheDocument();
});
