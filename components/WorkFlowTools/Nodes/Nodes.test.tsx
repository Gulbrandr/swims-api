import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nodes from './Nodes';

describe('<Nodes />', () => {
  test('it should mount', () => {
    render(<Nodes />);
    
    const nodes = screen.getByTestId('Nodes');

    expect(nodes).toBeInTheDocument();
  });
});