import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOnError from './ImageOnError';

describe('<ImageOnError />', () => {
  test('it should mount', () => {
    render(<ImageOnError />);

    const ImageOnError = screen.getByTestId('ImageOnError');

    expect(ImageOnError).toBeInTheDocument();
  });
});