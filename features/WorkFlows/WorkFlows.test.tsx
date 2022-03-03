import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WorkFlows from './WorkFlows';

describe('<WorkFlows />', () => {
  test('it should mount', () => {
    render(<WorkFlows />);
    
    const workFlows = screen.getByTestId('WorkFlows');

    expect(workFlows).toBeInTheDocument();
  });
});