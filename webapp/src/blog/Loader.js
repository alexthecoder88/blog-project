import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



export default function Loader() {
 

  return (
    <div  style={{textAlign:"center"}}>
      <CircularProgress />
    </div>
  );
}
