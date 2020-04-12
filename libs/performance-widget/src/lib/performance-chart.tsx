import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer
} from 'recharts';

import './performance-chart.scss';

/* eslint-disable-next-line */
export interface PerformanceChartProps {
  data: ReadonlyArray<any>;
}

export const PerformanceChart = (props: PerformanceChartProps) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          width={600}
          height={300}
          data={props.data}
          margin={{ top: 40, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
