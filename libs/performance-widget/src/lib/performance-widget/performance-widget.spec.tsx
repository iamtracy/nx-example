import React from 'react';
import { render } from '@testing-library/react';

import PerformanceWidget from './performance-widget';

describe('PerformanceWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PerformanceWidget apiKey="123456789" />);
    expect(baseElement).toBeTruthy();
  });
});
