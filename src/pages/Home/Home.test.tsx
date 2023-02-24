import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('render page', () => {
  render(<Home />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});
