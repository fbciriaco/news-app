import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsCard from './NewsCard';

describe('<NewsCard />', () => {
  test('it should mount', () => {
    render(<NewsCard />);

    const NewsCard = screen.getByTestId('NewsCard');

    expect(NewsCard).toBeInTheDocument();
  });
});