import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given a Header component', () => {
  test('When Header is rendered, it should show Transformer title img', () => {
    render(<Header />);

    const titleImgElement = screen.getByRole('img');
    expect(titleImgElement).toBeInTheDocument();
  });
});
