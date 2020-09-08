import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutDescription from './AboutDescription';

describe('<AboutDescription />', () => {
  test('it should mount', () => {
    render(<AboutDescription />);
    
    const aboutDescription = screen.getByTestId('AboutDescription');

    expect(aboutDescription).toBeInTheDocument();
  });
});