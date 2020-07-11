import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      cursor: 'pointer',
    },
  }),
);

function LogWidget() {
  const isLogged = false;
  const history = useHistory();
  const location = useLocation();
  const redirect = (path: string) => {
    return () => {
      if (location.pathname !== path) {
        history.push(path);
      }
    };
  }

  if (isLogged) {
    return <Button onClick={redirect('/logout')} color='inherit'>Logout</Button>;
  }
  return (
    <div>
      <Button
        onClick={redirect('/signin')}
        color='inherit'
        disabled={location.pathname === '/signin'}
      >
        Signin
      </Button>
      {'|'}
      <Button
        onClick={redirect('/signup')}
        color='inherit'
        disabled={location.pathname === '/signup'}
      >
        Signup
      </Button>
    </div>
  );
}

export default function TopBar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const redirect = (path: string) => {
    return () => {
      if (location.pathname !== path) {
        history.push(path);
      }
    };
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography onClick={redirect('/home')} variant='h6' className={classes.title}>
            Frontend
          </Typography>
          <LogWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}
