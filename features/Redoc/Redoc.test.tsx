import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Redoc from './Redoc';

describe('<Redoc />', () => {
  test('it should mount', () => {
    render(<Redoc />);
    
    const redoc = screen.getByTestId('Redoc');

    expect(redoc).toBeInTheDocument();
  });
});