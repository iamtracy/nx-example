import React, { Component, MouseEvent } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './performance-widget.scss';
import {
  CardContent,
  Typography,
  Button,
  ButtonGroup,
  withStyles
} from '@material-ui/core';

import { getPerformance } from '../../../api/src/index';
import { PerformanceChart } from './performance-chart';

export interface PerformanceWidgetProps {
  apiKey: string;
  title?: string;
}

const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing(2),
    width: 500
  }
});

export class PerformanceWidget extends Component<PerformanceWidgetProps> {
  state = { data: [], accountName: 'foo' };

  componentDidMount() {
    getPerformance().then(data => this.setState({ data }));
  }

  onSelect(event) {
    this.setState({ accountName: event.target.value });
  }

  render() {
    console.log(this.state, this.props);
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
          <FormControl>
            <InputLabel>Accounts</InputLabel>
            <Select onChange={this.onSelect.bind(this)}>
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

export default withStyles(styles, { withTheme: true })(PerformanceWidget);
