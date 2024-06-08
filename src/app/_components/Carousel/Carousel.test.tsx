import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';

describe('<Carousel />', () => {
  test('it should mount', () => {
    render(<Carousel />);

    const Carousel = screen.getByTestId('Carousel');

    expect(Carousel).toBeInTheDocument();
  });
});