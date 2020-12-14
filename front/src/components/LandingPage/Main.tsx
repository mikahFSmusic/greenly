import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GreenlyLogo from "../../assets/Greenly_logo.png";
import { TextField, Typography } from "@material-ui/core";
import Background from "../../assets/BackgroundWithClouds.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: "linearGradient(#DDFFD3, #BCFFA7)",
      fontFamily: "Nunito",
      textAlign: "center",
      justifyContent: "center",
      color: "rgb(0, 107, 56)",
      backgroundImage: `url(${Background})`,
      padding: 0,
      margin: 0,
      width: "100%",
      display: "flex"
    },
    comingSoon: {
      color: "#07C25E",
    },
    logo: {},

    textBody: {
      marginRight: "33%",
      marginLeft: "33%",
      alignSelf: "center",
      justifySelf: "center",
      fontFamily: "Nunito Sans",
      fontSize: "26px"
    },
    joinUs: {
      fontFamily: "Nunito Sans",
      fontSize: 40,
      flexWrap: "wrap"
    },
    form: {
      padding: 0,
    },
    emailSubmit: {
      width: "40vw",
      marginRight: "20%",
      marginLeft: "20%",
      padding: 0,
      margin: 0,
    },
  })
);

export const Main = () => {
  const classes = useStyles();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // submit email to mongo db
  }

  return (
    <div className={classes.container}>
      <Typography>
        <p className={classes.comingSoon}>COMING SOON...</p>
        <img src={GreenlyLogo} alt="logo" className={classes.logo} />
        <br />
        <br />
        <Typography className={classes.textBody} align="center">
          For centuries, our fossil fuel civilization has pushed the world off
          balance.
          <br />
          We're here to steer our planet back towards a more sustainable
          equilibrium and, ultimately, a Green Revolution - the next step in
          humanity's progress towards a future unconstrained by carbon emissions
          and their ecological consequences.
        </Typography>
        <p className={classes.joinUs}>Join us and fight for our planet</p>
        <form className={classes.form}>
          <TextField
            className={classes.emailSubmit}
            variant="filled"
            label="Enter your email"
            color="primary"
            InputProps={{ endAdornment: <SubmitButton onSubmit={handleSubmit} /> }}
            margin="none"
          ></TextField>
        </form>
        <br/>
      </Typography>
    </div>
  );
};

type SubmitProps = {
  onSubmit: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const SubmitButton = (props: SubmitProps) => {
  return (
    <Button
      onClick={props.onSubmit}
      style={{
        height: "100%"
      }}
      disableElevation
    >
      Submit
    </Button>
  );
};
