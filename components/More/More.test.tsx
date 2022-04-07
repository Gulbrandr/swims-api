import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import More from './More';

describe('<More />', () => {
  test('it should mount', () => {
    render(<More />);
    
    const more = screen.getByTestId('More');

    expect(more).toBeInTheDocument();
  });
});