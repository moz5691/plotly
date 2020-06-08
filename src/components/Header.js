import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  title: {
    margin: '0.8rem',
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h3" className={classes.title}>
          Belly Button Biodiversity Dashboard
        </Typography>
        <Typography variant="h5" className={classes.title}>
          Use the interactive charts below to explore the dataset
        </Typography>

      </AppBar>
    </div>
  )
}

export default Header;