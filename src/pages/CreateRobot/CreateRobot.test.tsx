import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateRobot from './CreateRobot';

test('render page', () => {
  render(<CreateRobot />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});
