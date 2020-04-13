import React from 'react';
import { text, number, boolean, object } from '@storybook/addon-knobs';

import { PerformanceWidget } from './performance-widget';

export default { title: 'PerformanceWidget' };

export const badToken = () => (
  <PerformanceWidget
    config={object('config', {
      apiKey: '123456789',
      title: 'Performance Widget'
    })}
  />
);
// export const tokenExpiresSoon = () => <PerformanceWidget apiKey="123456789" />;
// export const isLoading = () => <PerformanceWidget apiKey="123456789" />;
// export const hasData = () => <PerformanceWidget apiKey="123456789" />;
// export const noData = () => <PerformanceWidget apiKey="123456789" />;
// export const noAccounts = () => <PerformanceWidget apiKey="123456789" />;

export const asDynamicVariables = () => {
  const name = text('Name', 'James');
  const age = number('Age', 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};
