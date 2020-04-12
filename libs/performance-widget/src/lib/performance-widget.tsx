import React from 'react';

import './performance-widget.scss';

/* eslint-disable-next-line */
export interface PerformanceWidgetProps {
  apiKey: string
}

export const PerformanceWidget = (props: PerformanceWidgetProps) => {
  return (
    <div>
      <h1>Welcome to performance-widget component! Api Key: {props.apiKey}</h1>
    </div>
  );
};

export default PerformanceWidget;
