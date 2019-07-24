import React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, withRouter } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {ContextConsumer} from '../src/ContextApi/context';


import firebase from 'firebase'
import { NONAME } from 'dns';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // display:'none',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInSide = function(props) {
  const classes = useStyles();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState(null);
  function mylogin(event) {
    setLogin(event.target.value)
  };
  function mypass(event) {
    setPassword(event.target.value)
  };
  function signin(change){
    firebase.auth().signInWithEmailAndPassword(login, password).then(function(user){
      change(user)
      setUser(user);

      props.history.replace('/edit');
    })
    .catch(function(error){console.log(error)})
    
}
  return (<div>
    <ContextConsumer>
      {  
         ({changeUser}) =>( 
          <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={false} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  onChange={mylogin}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  onChange={mypass}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  fullWidth
                  onClick={()=>{signin(changeUser)}}
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to='/signup' >
                      Don't have an account? Sign Up</Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
    
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
         )

      }
    </ContextConsumer>
    
  </div>);
}

export default withRouter(SignInSide);