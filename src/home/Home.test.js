import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
  const { getByText } = render(
    <Home />
  );

  expect(true).toBeTruthy;
});
