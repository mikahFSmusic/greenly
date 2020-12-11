import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import GreenlyLogo from '../assets/Greenly_logo@6x.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "white"
    },
    menuButton: {
      margin: theme.spacing(2),
      color: "white",
      textDecoration: "underline",
    },
    buttonContainer: {
      backgroundColor: "rgb(72 181 55)",
      position: "absolute",
      display: "flex",
      top: 0,
      right: 0,
      height: "100%",
      alignContent: "center",
      justifyContent: "center"
    },
    logoContainer: {
      flex: 1,
    },
    logo: {
       maxWidth: 160
    },
    toolbar: {
      paddingRight: 0
    }
  }),
);

export const TopBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoContainer}>
            <img src={GreenlyLogo} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.buttonContainer}>
            <Button color="inherit" className={classes.menuButton}>Contact Us</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}