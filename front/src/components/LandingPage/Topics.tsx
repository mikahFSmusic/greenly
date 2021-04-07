import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      margin: 0,
      padding: 20,
    },
    column: {
      alignContent: "center",
    },
  })
);

type TopicsProps = {
  className: string;
};

export const Topics = (props: TopicsProps) => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <h2 className={classes.header}>
        Topics we are interested in covering (send us a pitch!)
      </h2>
      <Grid
        container
        spacing={3}
        className={classes.column}
        alignItems="center"
        direction="row"
      >
        <Grid item xs>
          Environmental impact of business
          <br />
          <br />
          Politics of green technology
          <br />
          <br />
          History behind key industries
        </Grid>

        <Grid item xs>
          Climate technology
          <br />
          <br />
          Clean energy
          <br />
          <br />
          Climate change
        </Grid>

        <Grid item xs>
          How to invest in green technology
          <br />
          <br />
          Where green technology is headed
          <br />
          <br />
          Companies to watch
        </Grid>
      </Grid>
      <br />
    </div>
  );
};
