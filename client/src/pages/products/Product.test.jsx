import { render, screen } from '@testing-library/react';
import Products from './Products';

test('renders learn react link', () => {
  render(<Products />);
  const linkElement = screen.getByText(/add product/i);
  expect(linkElement).toBeInTheDocument();
});
