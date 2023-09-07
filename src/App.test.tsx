import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pasapalabra', () => {
  render(<App />);
  const title = screen.getByText(/pasapalabra/i);
  expect(title).toBeInTheDocument();
});
