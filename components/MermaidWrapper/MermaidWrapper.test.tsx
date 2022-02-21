import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MermaidWrapper from './MermaidWrapper';

describe('<MermaidWrapper />', () => {
  test('it should mount', () => {
    render(<MermaidWrapper />);
    
    const mermaidWrapper = screen.getByTestId('MermaidWrapper');

    expect(mermaidWrapper).toBeInTheDocument();
  });
});