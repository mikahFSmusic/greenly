import React from 'react'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core/'

const useStyles = makeStyles((theme: Theme)=>
  createStyles({
    container: {
      backgroundColor: "#007236",
      height: "25vh",
      color: "#BCFFA7",
      textAlign: "center",
    },
    header: {
      margin: 0,
      padding: 20
    },
    column: {
      alignContent: "center"
    }
  }))


export const Topics = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Topics we are interested in covering (send us a pitch!)</h2>
      <Grid container spacing={3} className={classes.column} alignItems="center">
        <Grid item xs alignContent="space-between" alignItems="center" direction="column">
          Environmental impact of business
          <br/>
          <br/>
          Politics of green technology
          <br/>
          <br/>
          History behind key industries
          <br/>
          <br/>
        </Grid>

        <Grid item xs>
          Green technology
          <br/>
          <br/>
          Clean energy
          <br/>
          <br/>
          Climate change
          <br/>
          <br/>
        </Grid>

        <Grid item xs>
          How to invest in green technology
          <br/>
          <br/>
          Where green technology is headed
          <br/>
          <br/>
          Companies to watch
          <br/>
          <br/>
        </Grid>
      </Grid>
    </div>
  )
}