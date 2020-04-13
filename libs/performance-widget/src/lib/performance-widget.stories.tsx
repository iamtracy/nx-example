import React from 'react';
import { PerformanceWidget } from './performance-widget';

export default { title: 'PerformanceWidget' };

export const isLoading = () => <PerformanceWidget apiKey="123456789" />;
export const hasData = () => <PerformanceWidget apiKey="123456789" />;

isLoading.story = {
  isLoading: true
};
