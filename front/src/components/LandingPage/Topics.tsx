import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";
import "./Topics.scss";

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
      <br></br>
      <Typography variant="h5" className="header">
        Topics we are interested in covering (send us a pitch!)
      </Typography>
      <Grid
        container
        spacing={3}
        className="column"
        alignItems="center"
        direction="row"
      >
        <Grid item xs>
          <Typography variant="body2">Green Technology</Typography>
          <Typography variant="body2">Clean Energy</Typography>
          <Typography variant="body2">Environmental History</Typography>
          <Typography variant="body2">Politics</Typography>
        </Grid>

        <Grid item xs>
          <Typography variant="body2">Climate Change</Typography>
          <Typography variant="body2">Investing in Green</Typography>
          <Typography variant="body2">Green Jobs</Typography>
          <Typography variant="body2">Rising Companies</Typography>
        </Grid>

        <Grid item xs>
          <Typography variant="body2">Future Visions</Typography>
          <Typography variant="body2">Sustainability</Typography>
          <Typography variant="body2">Agriculture</Typography>
          <Typography variant="body2">Clean Water Initiatives</Typography>
        </Grid>
      </Grid>
      <br />
    </div>
  );
};
