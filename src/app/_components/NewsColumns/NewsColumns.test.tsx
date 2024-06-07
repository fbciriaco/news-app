import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsColumns from './NewsColumns';

describe('<NewsColumns />', () => {
  test('it should mount', () => {
    render(<NewsColumns />);

    const NewsColumns = screen.getByTestId('NewsColumns');

    expect(NewsColumns).toBeInTheDocument();
  });
});