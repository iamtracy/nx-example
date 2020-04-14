import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './performance-widget.scss';
import { CardContent } from '@material-ui/core';
import { Button } from '@progress/kendo-react-buttons';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Card, CardSubtitle } from '@progress/kendo-react-layout';
import PerformanceChart from '../performance-chart/performance-chart';
import moment from 'moment';
import { getPerformance, getAccounts } from './../../../../api/src/index';
import { IPerformanceWidgetProps } from '../models/performance-api.model';

const divStyle = {
  marginTop: 20
};

export class PerformanceWidget extends Component<IPerformanceWidgetProps> {
  state = {
    data: [],
    accounts: [],
    accountName: 'foo'
  };
  defaultDateRangeValue = {
    start: moment()
      .subtract(30, 'days')
      .toDate(),
    end: moment().toDate()
  };
  searchObj: any = {
    dateRange: this.defaultDateRangeValue,
    duration: 'week'
  };
  styles = { ...this.props.config.styles, margin: '3rem auto 0' };

  componentDidMount() {
    getPerformance({}).then(data => this.setState({ ...this.state, data }));
    getAccounts().then(accounts => this.setState({ ...this.state, accounts }));
  }

  onDateChange(event) {
    this.searchObj = { ...this.searchObj, dateRange: event.value };
    if (!!event.value.start && !!event.value.end) {
      this.search();
    }
  }

  onAccountChange(event) {
    this.searchObj = { ...this.searchObj, accountId: event.value.id };
    this.search();
  }

  onButtonClickWeek() {
    this.searchObj = { ...this.searchObj, duration: 'week' };
    this.search();
  }

  onButtonClickMonth() {
    this.searchObj = { ...this.searchObj, duration: 'month' };
    this.search();
  }

  onButtonClickYear() {
    this.searchObj = { ...this.searchObj, duration: 'year' };
    this.search();
  }

  private search() {
    getPerformance(this.searchObj).then(data =>
      this.setState({ ...this.state, data })
    );
  }

  render() {
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
                <Button look="flat" onClick={this.onButtonClickWeek.bind(this)}>
                  Week
                </Button>
                <Button
                  look="flat"
                  onClick={this.onButtonClickMonth.bind(this)}
                >
                  Month
                </Button>
                <Button look="flat" onClick={this.onButtonClickYear.bind(this)}>
                  Year
                </Button>
              </Grid>
            </Grid>
            <div style={divStyle}></div>
            <Grid container justify="space-between">
              <Grid item>
                <DropDownList
                  data={this.state.accounts}
                  onChange={this.onAccountChange.bind(this)}
                  textField="name"
                  dataItemKey="id"
                  name="date"
                />
              </Grid>
              <Grid item>
                <DateRangePicker
                  defaultValue={this.defaultDateRangeValue}
                  onChange={this.onDateChange.bind(this)}
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
