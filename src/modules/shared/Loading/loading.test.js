import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import loading from './loading';

describe('<loading />', () => {
  test('it should mount', () => {
    render(<loading />);
    
    const loading = screen.getByTestId('loading');

    expect(loading).toBeInTheDocument();
  });
});