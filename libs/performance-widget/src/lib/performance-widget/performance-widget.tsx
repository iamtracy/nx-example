import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './performance-widget.scss';
import { CardContent, CircularProgress } from '@material-ui/core';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Card, CardSubtitle } from '@progress/kendo-react-layout';
import PerformanceChart from '../performance-chart/performance-chart';
import { getPerformance, getAccounts } from './../../../../api/src/index';

export interface PerformanceWidgetProps {
  config: {
    apiKey: string;
    title?: string;
    styles?: Object;
  };
}

const divStyle = {
  marginTop: 20
};

export class PerformanceWidget extends Component<PerformanceWidgetProps> {
  state = {
    data: [],
    accounts: [],
    accountName: 'foo',
    date: new Date(),
    focused: false,
    isLoading: true,
    expirationDate: new Date()
  };
  styles = { ...this.props.config.styles, margin: '3rem auto 0' };

  componentDidMount() {
    getPerformance().then(data => this.setState({ data, isLoading: false }));
    getAccounts().then(accounts => this.setState({ accounts }));
  }

  render() {
    if (this.state.isLoading) return <CircularProgress />;
    return (
      <div style={this.styles}>
        <Card>
          <CardContent>
            <Grid container justify="space-between">
              <Grid item>
                <CardSubtitle>
                  {this.props.config.title || 'Performance Widget'}
                </CardSubtitle>
              </Grid>
              <Grid item>
                <ButtonGroup>
                  <Button>Week</Button>
                  <Button>Month</Button>
                  <Button>Year</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
            <div style={divStyle}></div>
            <Grid container justify="space-between">
              <Grid item>
                <DropDownList data={this.state.accounts} />
              </Grid>
              <Grid item>
                <DateRangePicker />
              </Grid>
            </Grid>
            <PerformanceChart data={this.state.data}></PerformanceChart>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default PerformanceWidget;
