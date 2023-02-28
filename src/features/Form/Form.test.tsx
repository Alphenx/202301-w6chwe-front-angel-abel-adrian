import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Form from './Form';

describe('Given a Form component', () => {
  test('When the component is rendered, it should show two text inputs', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const textboxElements = screen.getAllByRole('textbox');
    expect(textboxElements.length).toEqual(2);
  });
  test('When the component is rendered, it should show two sliders', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const sliderElements = screen.getAllByRole('slider');
    fireEvent.change(sliderElements[0], { target: { value: 7 } });
    expect(sliderElements.length).toEqual(2);
  });

  test('When the component is rendered, it should show a submit button and call a function', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const submitFn = jest.fn();
    const submitElement = screen.getByRole('button');
    userEvent.click(submitElement, submitFn());
    await waitFor(() => {
      expect(submitFn).toHaveBeenCalled();
    });
  });

  test('When the user press submit, should show a robot name', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const submit = screen.getByTestId('submit-button');
    userEvent.click(submit);
    const paragraphName = screen.getAllByRole('paragraph');
    await waitFor(() => {
      expect(paragraphName).toHaveTextContent('Pepe');
    });
  });
});
