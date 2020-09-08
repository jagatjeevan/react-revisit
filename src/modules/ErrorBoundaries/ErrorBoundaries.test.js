import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundaries from './ErrorBoundaries';

describe('<ErrorBoundaries />', () => {
  test('it should mount', () => {
    render(<ErrorBoundaries />);
    
    const errorBoundaries = screen.getByTestId('ErrorBoundaries');

    expect(errorBoundaries).toBeInTheDocument();
  });
});