import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamCard from './TeamCard';

describe('<TeamCard />', () => {
  test('it should mount', () => {
    render(<TeamCard />);

    const TeamCard = screen.getByTestId('TeamCard');

    expect(TeamCard).toBeInTheDocument();
  });
});