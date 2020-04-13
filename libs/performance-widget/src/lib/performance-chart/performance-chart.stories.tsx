import React from 'react';
import { array, object } from '@storybook/addon-knobs';

import { PerformanceChart } from './performance-chart';

export default { title: 'PerformanceChart' };

const fakeData = [
  {
    name: 'foo',
    uv: Math.floor(Math.random() * 2000) + 1,
    pv: Math.floor(Math.random() * 3800) + 1,
    amt: Math.floor(Math.random() * 2500) + 1
  },
  {
    name: 'bar',
    uv: Math.floor(Math.random() * 2000) + 1,
    pv: Math.floor(Math.random() * 3800) + 1,
    amt: Math.floor(Math.random() * 2500) + 1
  },
  {
    name: 'biz',
    uv: Math.floor(Math.random() * 2000) + 1,
    pv: Math.floor(Math.random() * 3800) + 1,
    amt: Math.floor(Math.random() * 2500) + 1
  },
  {
    name: 'baz',
    uv: Math.floor(Math.random() * 2000) + 1,
    pv: Math.floor(Math.random() * 3800) + 1,
    amt: Math.floor(Math.random() * 2500) + 1
  },
  {
    name: 'biz',
    uv: Math.floor(Math.random() * 2000) + 1,
    pv: Math.floor(Math.random() * 3800) + 1,
    amt: Math.floor(Math.random() * 2500) + 1
  },
  {
    name: 'baz',
    uv: Math.floor(Math.random() * 2000) + 1,
    pv: Math.floor(Math.random() * 3800) + 1,
    amt: Math.floor(Math.random() * 2500) + 1
  }
];

export const isEmpty = () => <PerformanceChart data={array('data', [])} />;
export const hasData = () => (
  <PerformanceChart data={object('data', fakeData)} />
);
