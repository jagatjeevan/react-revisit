import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portals from './Portals';

describe('<Portals />', () => {
  test('it should mount', () => {
    render(<Portals />);
    
    const portals = screen.getByTestId('Portals');

    expect(portals).toBeInTheDocument();
  });
});