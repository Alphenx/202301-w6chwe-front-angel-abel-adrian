import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditRobot from './EditRobot';

test('render page', () => {
  render(<EditRobot />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});
