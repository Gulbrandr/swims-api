import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Description from './Description';

describe('<Description />', () => {
  test('it should mount', () => {
    render(<Description />);
    
    const description = screen.getByTestId('Description');

    expect(description).toBeInTheDocument();
  });
});