import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrintMe from './PrintMe';

describe('<PrintMe />', () => {
  test('it should mount', () => {
    render(<PrintMe />);
    
    const printMe = screen.getByTestId('PrintMe');

    expect(printMe).toBeInTheDocument();
  });
});