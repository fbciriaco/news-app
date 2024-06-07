import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
  test('it should mount', () => {
    render(<Paragraph />);

    const Paragraph = screen.getByTestId('Paragraph');

    expect(Paragraph).toBeInTheDocument();
  });
});