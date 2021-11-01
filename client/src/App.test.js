import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from './pages/products/Products'
import Home from './pages/home/Home'

test('on initial render, Add button disabled', () => {
  render(<Products />);
  expect(screen.getByRole('button', {name: /add/i })).toBeDisabled();
});
test('when name quantity price is entered, Add button becomes enabled', async () => {
  render(<Products />);
  userEvent.type(screen.getByPlaceholderText(/insert product name/i), "mango")
  userEvent.type(screen.getByPlaceholderText(/insert quantity/i), "20")
  userEvent.type(screen.getByPlaceholderText(/insert price/i), "2000")
  expect(await screen.findByRole('button', {name: /add/i })).toBeEnabled();
});
test('on initial render, get the "data:" text', () => {
  render(<Home />);
  const linkElement = screen.getByText(/data:/i);
  expect(linkElement).toBeInTheDocument();
});