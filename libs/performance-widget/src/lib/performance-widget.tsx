import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  ButtonGroup
} from '@material-ui/core';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer
} from 'recharts';

export interface PerformanceWidgetProps {
  apiKey: string;
  title?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  formControl: {
    minWidth: 120,
    marginBottom: theme.spacing(0.75)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  title: {
    fontSize: 14
  }
}));

export const PerformanceWidget = (props: PerformanceWidgetProps) => {
  const classes = useStyles();
  const [accountName, setAccountName] = React.useState('');
  const handleChange = event => {
    setAccountName(event.target.value);
  };
  const chartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="space-between" spacing={3}>
              <Grid item alignContent="center">
                <Typography className={classes.title}>
                  {props.title} (api key: {props.apiKey})
                </Typography>
              </Grid>
              <Grid item alignContent="center">
                <ButtonGroup
                  variant="text"
                  color="primary"
                  size="small"
                  aria-label="text primary button group"
                >
                  <Button>Week</Button>
                  <Button>Month</Button>
                  <Button>Year</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Accounts</InputLabel>
              <Select value={accountName} onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12}>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  width={600}
                  height={300}
                  data={chartData}
                  margin={{ top: 25, right: 20, bottom: 5, left: 0 }}
                >
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

PerformanceWidget.defaultProps = {
  title: 'Performance Widget'
};

export default PerformanceWidget;
