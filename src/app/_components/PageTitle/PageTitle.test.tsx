import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTitle from './PageTitle';

describe('<PageTitle />', () => {
  test('it should mount', () => {
    render(<PageTitle />);

    const PageTitle = screen.getByTestId('PageTitle');

    expect(PageTitle).toBeInTheDocument();
  });
});