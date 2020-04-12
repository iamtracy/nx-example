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
    margin: theme.spacing(1),
    minWidth: 120
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
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.title} gutterBottom>
              <Grid container justify="space-between" spacing={3}>
                <Grid item>
                  Title: {props.title}, Api Key: {props.apiKey}
                </Grid>
                <Grid item>
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
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Accounts</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
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
