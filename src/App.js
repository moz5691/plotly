import './App.css';
import * as d3 from 'd3';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header';
import DemographicInfo from './components/DemographicInfo';
import Barchart from './components/BarChart';
import GuageChart from './components/GuageChart';
import BubbleChart from './components/BubbleChart';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '20px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 500,
  },
}));


function App() {

  const [dataset, setDataset] = useState('')

  const classes = useStyles();
  const [name, setName] = useState('940');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    d3.json('samples.json')
      .then(dataset => setDataset(dataset))
  }, [])


  return (
    <>
      <Header />
      {dataset ?
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Name</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {dataset.names.map((n, i) => <MenuItem key={i} value={n}>{n}</MenuItem>)}
                  </Select>
                </FormControl>
                <DemographicInfo metadata={dataset.metadata} id={name} />
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper className={classes.paper}>
                <Barchart samples={dataset.samples} id={name} />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <GuageChart metadata={dataset.metadata} id={name} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <BubbleChart samples={dataset.samples} id={name} />
              </Paper>
            </Grid>
          </Grid>
        </div>
        : null}
    </>
  );
}

export default App;