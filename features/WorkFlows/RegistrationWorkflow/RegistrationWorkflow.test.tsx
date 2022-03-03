import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegistrationWorkflow from './RegistrationWorkflow';

describe('<RegistrationWorkflow />', () => {
  test('it should mount', () => {
    render(<RegistrationWorkflow />);
    
    const registrationWorkflow = screen.getByTestId('RegistrationWorkflow');

    expect(registrationWorkflow).toBeInTheDocument();
  });
});