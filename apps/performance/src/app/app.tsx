import React from 'react';

import { PerformanceWidget } from '@vestmark/performance-widget';

const config = {
  apiKey: '1234567',
  styles: {
    maxWidth: '1200px',
  },
};

const PerformanceWidgetApp = (props) => {
  return <PerformanceWidget config={config}></PerformanceWidget>;
};

export default PerformanceWidgetApp;
