import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import './performance-widget.scss';
import {
  CardContent,
  Typography,
  Button,
  ButtonGroup,
  CircularProgress
} from '@material-ui/core';
import { Calendar } from 'react-date-range';
import PerformanceChart from '../performance-chart/performance-chart';
import { getPerformance, getAccounts } from './../../../../api/src/index';

export interface PerformanceWidgetProps {
  config: {
    apiKey: string;
    title?: string;
  };
}

const divStyle = {
  marginTop: 20
};

const dropdownStyle = {
  minWidth: 140
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

  componentDidMount() {
    getPerformance().then(data => this.setState({ data, isLoading: false }));
    getAccounts().then(accounts => this.setState({ accounts }));
  }

  onSelect(event) {
    this.setState({ accountName: event.target.value });
  }

  onDateChange() {}

  onFocusChange() {}

  handleSelect() {}

  render() {
    if (this.state.isLoading) return <CircularProgress />;
    return (
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography>
                {this.props.config.title || 'Performance'} (key:{' '}
                {this.props.config.apiKey})
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup variant="text" color="primary" size="small">
                <Button>Week</Button>
                <Button>Month</Button>
                <Button>Year</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Divider />
          <div style={divStyle}></div>
          <Grid container justify="space-between">
            <Grid item>
              <FormControl style={dropdownStyle}>
                <InputLabel>Account Name</InputLabel>
                <Select onChange={this.onSelect.bind(this)}>
                  (
                  {this.state.accounts.map((account, i) => (
                    <MenuItem value={account.id} key={i}>
                      {account.name}
                    </MenuItem>
                  ))}
                  )
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Calendar
                id="date_input"
                focused={this.state.focused}
                onDateChange={this.onDateChange}
                onFocusChange={this.onFocusChange}
                date={this.state.date}
                onChange={this.handleSelect}
              />
            </Grid>
          </Grid>
          <PerformanceChart data={this.state.data}></PerformanceChart>
        </CardContent>
      </Card>
    );
  }
}

export default PerformanceWidget;
