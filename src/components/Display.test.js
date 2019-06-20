import React from 'react';
import { render, getByText } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';
import { fireEvent } from '@testing-library/react/dist';

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });

  it('should render the number of strikes', () => {
    const { getByText } = render(<Display />);
    const strikeButton = getByText(/strikes/i);
    fireEvent.click(strikeButton);
  });

  it('should render the number of balls', () => {
    const { getByText } = render(<Display />);
    const ballButton = getByText(/balls/i);
    fireEvent.click(ballButton);
  });
});
