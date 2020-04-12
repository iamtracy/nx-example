import React from "react";

import { PerformanceWidget } from '@vestmark/performance-widget';

interface PerformanceWidgetProps {
  apiKey: string
}

const PerformanceWidgetApp = (props: PerformanceWidgetProps) => {
    return (<PerformanceWidget apiKey={props.apiKey}></PerformanceWidget>)
}


export default PerformanceWidgetApp;