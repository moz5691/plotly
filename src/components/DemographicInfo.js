import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white'
  },
  pos: {
    marginBottom: 8,
    marginLeft: 10,
    textAlign: 'left'
  },
});


export default function ({ metadata, id }) {

  const classes = useStyles();
  const demographicInfo = metadata.filter(d => d.id === parseInt(id, 10))[0];

  return (
    <div className={classes.root}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        <strong>Demographic Info</strong>
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Id: <strong>{demographicInfo.id}</strong>
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Ethnicity: <strong>{demographicInfo.ethnicity}</strong>
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Gender: <strong>{demographicInfo.gender}</strong>
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Age: <strong>{demographicInfo.age}</strong>
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Location: <strong>{demographicInfo.location}</strong>
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        BBtype: <strong>{demographicInfo.bbtype}</strong>
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        WFreq: <strong>{demographicInfo.wfreq}</strong>
      </Typography>
    </div>
  );
}