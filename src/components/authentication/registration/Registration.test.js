import React from 'react';
import { render, screen } from '@testing-library/react';
import Registration from './Registration';

test('renders learn react link', () => {
  render(<Registration />);
  const linkElement = screen.getByText('');
  expect(linkElement).toBeInTheDocument();
});
