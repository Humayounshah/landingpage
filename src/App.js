import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from './assests/bg.jpg'
import { CssBaseline } from '@material-ui/core';
import Header from './components/Headers';
import PlaceTovisit from './components/PlaceTovisit';

const useStyles = makeStyles((theme)=>({
  root:{
    minHeight:'100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + background})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  },
}));

function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline/>
    <Header/>
    <PlaceTovisit/>
  </div>
  
}

export default App;
