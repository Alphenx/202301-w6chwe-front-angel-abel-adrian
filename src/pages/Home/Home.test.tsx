import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Home from './Home';

test('render page', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(true).toBe(true);
});
