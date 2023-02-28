import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Card from '../Card/Card';
import { server } from '../../mocks/server';
import { getRobots } from '../CardList/CardListApi';

describe('Given a robotCar should be render', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When a cardlist is render should to show the image', async () => {
    const robots = await getRobots();
    render(
      <Provider store={store}>
        <Card robotCard={robots[0]} />
      </Provider>
    );
    const images = screen.getAllByRole('img');
    expect(images.length).toEqual(2);
  });
});
