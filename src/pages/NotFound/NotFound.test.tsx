import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

test('render page', () => {
  render(<NotFound />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});
