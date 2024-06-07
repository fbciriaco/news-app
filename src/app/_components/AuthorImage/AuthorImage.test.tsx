import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthorImage from './AuthorImage';

describe('<AuthorImage />', () => {
  test('it should mount', () => {
    render(<AuthorImage />);

    const AuthorImage = screen.getByTestId('AuthorImage');

    expect(AuthorImage).toBeInTheDocument();
  });
});