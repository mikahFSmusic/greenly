import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";

interface BottomBarProps {
  contactClick: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: "rgb(0, 63, 30)",
      color: "#BCFFA7",
      justifyContent: "center",
      textAlign: "center",
      display:"flex",
      minHeight: "6vh"
    },
    gridContainer: {
      display: "flex",
      alignContent: "center",
    },
    link: {
      color: "inherit"
    }
  })
);

export const BottomBar = (props: BottomBarProps) => {
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
          <Link href="#" className={classes.link}>
            About Us
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="#" className={classes.link} onClick={props.contactClick}>
            Contact Us
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="#" className={classes.link}>
            Twitter
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
