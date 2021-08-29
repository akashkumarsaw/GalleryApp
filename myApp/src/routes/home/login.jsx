import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRef } from 'react';
import { Autorenew } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
   
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }
}));

const  LogIn = (props) => {
  const classes = useStyles();
  const {setUsername} =props;
  const valueRef = useRef('');//creating a refernce for TextField Component

  const setValue = () => {
    setUsername(valueRef.current.value); //on clicking button accesing current value of TextField and setting as username
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
       
          <TextField
            variant="outlined"
            backgroundColor='red'
            fullWidth
            inputRef={valueRef} 
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={setValue}
          >
            Sign In
          </Button>
          
   
      </div>
     
    </Container>
  );
}

export default  LogIn;