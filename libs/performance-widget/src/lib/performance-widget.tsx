import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
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
  ButtonGroup
} from '@material-ui/core';

import { getPerformance } from '../../../api/src/index';
import { PerformanceChart } from './performance-chart';

export interface PerformanceWidgetProps {
  apiKey: string;
  title?: string;
}

const divStyle = {
  marginTop: 20
};

const dropdownStyle = {
  minWidth: 120
};

export class PerformanceWidget extends Component<PerformanceWidgetProps> {
  state = { data: [], accountName: 'foo' };

  componentDidMount() {
    getPerformance().then(data => this.setState({ data }));
  }

  onSelect(event) {
    this.setState({ accountName: event.target.value });
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography>
                {this.props.title || 'Performance'} (key: {this.props.apiKey})
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
          <FormControl>
            <Select style={dropdownStyle} onChange={this.onSelect.bind(this)}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <PerformanceChart data={this.state.data}></PerformanceChart>
        </CardContent>
      </Card>
    );
  }
}

export default PerformanceWidget;
