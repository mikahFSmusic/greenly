import React, { ChangeEvent, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GreenlyLogo from "../../assets/Greenly_logo.png";
import { TextField, Typography } from "@material-ui/core";
import Background from "../../assets/BackgroundWithClouds.png";
import { addEmail } from "../../API";

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
    content: {
      textAlign: "center",
      display: "block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "1em",
      marginInlineEnd: "1em",
      margin: 0,
      fontSize: "1rem",
      fontFamily: "Roboto, Helvetica, Arial, san-serif",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00983em"
    },
    comingSoon: {
      color: "#07C25E",
    },
    logo: {},

    textBody: {
      marginRight: "29%",
      marginLeft: "29%",
      alignSelf: "center",
      justifySelf: "center",
      fontFamily: "Nunito Sans",
      fontSize: "26px"
    },
    joinUs: {
      fontFamily: "Nunito Sans",
      fontSize: 40,
      flexWrap: "wrap",
      margin: 25
    },
    form: {
      padding: 0,
    },
    emailSubmit: {
      width: "40vw",
      marginRight: "20%",
      marginLeft: "20%",
      marginBottom: "20px",
    },
  })
);

export const Main = () => {
  const [email, setEmail] = useState("");
  const classes = useStyles();

  const handleEmailChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const el = event.target as HTMLTextAreaElement;
    const value = el.value
    setEmail(value);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (email) { addEmail(email); }
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
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
            onChange={handleEmailChange}
          ></TextField>
        </form>
      </div>
    </div>
  );
};

// Submit Button
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
