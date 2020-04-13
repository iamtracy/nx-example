import React from 'react';
import { render } from '@testing-library/react';

import PerformanceChart from './performance-chart';

describe(' PerformanceChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PerformanceChart />);
    expect(baseElement).toBeTruthy();
  });
});
