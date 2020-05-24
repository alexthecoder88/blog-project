import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CreateNewPostButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{textAlign:"center"}}>
      <Button variant="contained" color="primary" onClick={() => props.callback()}>
        {props.buttonTxt}
      </Button>
    </div>
  );
}
