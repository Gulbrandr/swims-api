import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WorkFlowWrapper from './WorkFlowWrapper';

describe('<WorkFlowWrapper />', () => {
  test('it should mount', () => {
    render(<WorkFlowWrapper />);
    
    const workFlowWrapper = screen.getByTestId('WorkFlowWrapper');

    expect(workFlowWrapper).toBeInTheDocument();
  });
});