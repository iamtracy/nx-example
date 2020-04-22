import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './performance-widget.scss';
import { CardContent, Button } from '@material-ui/core';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Card, CardSubtitle } from '@progress/kendo-react-layout';
import PerformanceChart from '../performance-chart/performance-chart';
import moment from 'moment';
import { getPerformance, getAccounts } from './../../../../api/src/index';
import { IPerformanceWidgetProps } from '../models/performance-api.model';

const divStyle = {
  marginTop: 20,
};

export class PerformanceWidget extends Component<IPerformanceWidgetProps> {
  state = {
    data: [],
    accounts: [],
  };
  searchObj: any = {
    startDate: moment().subtract(30, 'days').toDate(),
    endDate: moment().toDate(),
    period: 'DAY',
  };
  styles = { ...this.props.config.styles, margin: '3rem auto 0' };

  componentDidMount() {
    getAccounts().then((accounts) =>
      this.setState({ ...this.state, accounts })
    );
  }

  onDateChange = (event) => {
    this.searchObj = {
      ...this.searchObj,
      startDate: event.value.start,
      endDate: event.value.end,
    };
    if (!!event.value.start && !!event.value.end) {
      this.search();
    }
  };

  onAccountChange = (event) => {
    this.searchObj = { ...this.searchObj, account: event.value };
    this.search();
  };

  onButtonClickDay = (data) => {
    console.log(data);
    this.searchObj = { ...this.searchObj, period: 'DAY' };
    this.search();
  };

  onButtonClickQuarter = (data) => {
    console.log(data);
    this.searchObj = { ...this.searchObj, period: 'QUARTER' };
    this.search();
  };

  onButtonClickYear = (data) => {
    console.log(data);
    this.searchObj = { ...this.searchObj, period: 'YEAR' };
    this.search();
  };

  search = () => {
    getPerformance(this.searchObj).then((data) =>
      this.setState({ ...this.state, data })
    );
  };

  render() {
    return (
      <div style={this.styles}>
        <Card>
          <CardContent>
            <Grid container justify="space-between">
              <Grid item>
                <CardSubtitle>View Performance</CardSubtitle>
              </Grid>
              <Grid item>
                <Button onClick={this.onButtonClickDay}>DAY</Button>
                <Button onClick={this.onButtonClickQuarter}>QUARTER</Button>
                <Button onClick={this.onButtonClickYear}>YEAR</Button>
              </Grid>
            </Grid>
            <div style={divStyle}></div>
            <Grid container justify="space-between">
              <Grid item>
                <DropDownList
                  data={this.state.accounts}
                  onChange={this.onAccountChange}
                  textField="name"
                  dataItemKey="id"
                  name="date"
                />
              </Grid>
              <Grid item>
                <DateRangePicker
                  defaultValue={{
                    start: moment().subtract(30, 'days').toDate(),
                    end: moment().toDate(),
                  }}
                  onChange={this.onDateChange}
                />
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
