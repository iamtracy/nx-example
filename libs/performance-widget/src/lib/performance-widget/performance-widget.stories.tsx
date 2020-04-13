import React from 'react';
import { object } from '@storybook/addon-knobs';
import { PerformanceWidget } from './performance-widget';
export default { title: 'PerformanceWidget' };

export const badToken = () => (
  <PerformanceWidget
    config={object('config', {
      apiKey: '123456789',
      title: 'Performance Widget',
      expirationDate: new Date()
    })}
  />
);
export const tokenExpiresSoon = () => (
  <PerformanceWidget
    config={object('config', {
      apiKey: '123456789',
      title: 'Performance Widget',
      expirationDate: new Date()
    })}
  />
);
export const isLoading = () => (
  <PerformanceWidget
    config={object('config', {
      apiKey: '123456789',
      title: 'Performance Widget',
      expirationDate: new Date()
    })}
  />
);
export const hasData = () => (
  <PerformanceWidget
    config={object('config', {
      apiKey: '123456789',
      title: 'Performance Widget',
      expirationDate: new Date()
    })}
  />
);
export const noData = () => (
  <PerformanceWidget
    config={object('config', {
      apiKey: '123456789',
      title: 'Performance Widget',
      expirationDate: new Date()
    })}
  />
);
export const noAccounts = () => (
  <PerformanceWidget
    config={object('config', {
      apiKey: '123456789',
      title: 'Performance Widget',
      expirationDate: new Date()
    })}
  />
);
