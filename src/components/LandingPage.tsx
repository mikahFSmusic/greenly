import React from "react";
import { TopBar } from "./TopBar";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typeText:{
      lineHeight: 1.8,
      padding: 2
    },
  })
)

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <TopBar />
      <Container style={{padding: 10}}>
      <h1>Our Mission</h1>
      <Typography>
        <Box className={classes.typeText}>
          <b>For decades</b> journalists, politicians, and scientists warned that our
          incessant consumption of fossil fuels produced greenhouse gases that
          would overheat our planet. Few listened.
        </Box>
        <br/>
        <Box className={classes.typeText}>
          <b>Today</b> wildfires rage everywhere
          from the Australian bush to the Amazon rainforest and the hills of
          California. Rising temperatures and drier conditions leave our natural
          spaces highly prone to fire, and each year’s wildfire season is worse
          than the one that came before it. Meanwhile, rising tides drown coastal
          cities and threaten entire island nations.
        </Box>
        <br/>
        <Box className={classes.typeText}>
          The time to respond to the
          spectre of climate change was <b>yesterday</b>. But our species is at least
          finally stepping up to the challenge. Our global economy is moving away
          from oil, gas, and solar towards a better future - a greener future.
        </Box>
        <br/>
        <Box className={classes.typeText}>
          <b>Tomorrow</b> our houses will run on solar and wind energy and our
          automobiles will be propelled by electricity. Climate tech is poised to
          transform our world over the next two decades - and usher in a green
          economy. Join us as we watch the world turn more greenly.
        </Box>
      </Typography>
      <h1>Join The Cause</h1>
      <p>
        "If you believe in our mission statement, and would like to become a
        Greenly Contributor, please contact _______@greenly.co"
      </p>
      </Container>
    </div>
  );
};
