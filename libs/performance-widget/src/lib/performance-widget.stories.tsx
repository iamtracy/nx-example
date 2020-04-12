import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import { PerformanceWidget } from './performance-widget';

export default { title: 'Button' };

export const primary = () => <PerformanceWidget apiKey="123456789" />;
