import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TryIt from './TryIt';

describe('<TryIt />', () => {
  test('it should mount', () => {
    render(<TryIt />);
    
    const tryIt = screen.getByTestId('TryIt');

    expect(tryIt).toBeInTheDocument();
  });
});