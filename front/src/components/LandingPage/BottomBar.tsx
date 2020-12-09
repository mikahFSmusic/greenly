import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: "rgb(0, 63, 30)",
      height: "10rem",
      color: "#BCFFA7",
      justifyContent: "center",
      textAlign: "center",
      display:"flex"
    },
    gridContainer: {
      display: "flex",
      alignContent: "center",
    },
  })
);

export const BottomBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid
        container
        spacing={3}
        className={classes.gridContainer}
        alignContent="center"
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={4}>
          About Us
        </Grid>
        <Grid item xs={4}>
          Contact Us
        </Grid>
        <Grid item xs={4}>
          Twitter
        </Grid>
      </Grid>
    </div>
  );
};
