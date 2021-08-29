
import React, { useState } from 'react';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
      marginBottom: 20,
      marginTop: 10,
      marginLeft:10,
      marginRight: 10
  },
  title: {
    flexGrow: 1,
  },
}));
 const Navbar = (props) => {

    const classes = useStyles();
const {username} = props;
    return(    <AppBar>
        <Toolbar>
    
    <Typography variant="h6" className={classes.title}>
      Gallery App
    </Typography>
    <Button color="inherit">{username}</Button>
  </Toolbar>
    </AppBar>);


 }

 export default Navbar;