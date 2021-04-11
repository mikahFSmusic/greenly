import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";

interface BottomBarProps {
  contactClick: () => void;
  className: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      display: "flex",
      alignContent: "center",
    },
    link: {
      color: "inherit",
    },
  })
);

export const BottomBar = (props: BottomBarProps) => {
  const classes = useStyles();
  return (
    <div className={props.className}>
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
          <Link
            href="https://www.facebook.com/webelieveingreen/?tsid=0.3079463699505257&source=result"
            className={classes.link}
          >
            Facebook
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
