import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Swagger from './Swagger';

describe('<Swagger />', () => {
  test('it should mount', () => {
    render(<Swagger />);
    
    const swagger = screen.getByTestId('Swagger');

    expect(swagger).toBeInTheDocument();
  });
});