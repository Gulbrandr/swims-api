import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SwimsLogo from './SwimsLogo';

describe('<SwimsLogo />', () => {
  test('it should mount', () => {
    render(<SwimsLogo />);
    
    const swimsLogo = screen.getByTestId('SwimsLogo');

    expect(swimsLogo).toBeInTheDocument();
  });
});