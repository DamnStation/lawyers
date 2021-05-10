import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Picture from "./man.jpg";

const useStyles = makeStyles({
  displayDiv: {
    display: `flex`,
    marginTop: `auto`,
    marginBottom: `auto`,
  },
  ParalaxStyle: {
    borderLeft: `4px solid rgb(235, 206, 46)`,
    borderRight: `4px solid rgb(235, 206, 46)`,
    borderRadius: `50px`,
    backgroundImage: `url(${Picture})`,
    backgroundRepeat: `round`,
    backgroundSize: `cover`,
    width: `400px`,
    height: `400px`,
  },
  center: {
    marginTop: `auto`,
    marginBottom: `auto`,
  },
});
function HomeComponentTwo() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      disableGutters={true}
      className={classes.displayDiv}
    >
      <Container align="center" maxWidth="xs" className={classes.center}>
        <Typography variant="h6" draggable={true}>
          Управляващият съдружник - адв. Иван Грошев, е специалист в сферата на
          наказателното право с повече от 27 години опит, от които 21 като
          адвокат, а адв. Гина Грошева e специалист в сферата на публичното,
          гражданско право и процес, по-конкретно във вещно, облигационно и
          търговско право, банково и застрахователно право.
          {/* A specialist Scottish law firm, providing you with essential personal
          legal services in a clear and straightforward way. */}
        </Typography>
      </Container>
      <Container className={classes.ParalaxStyle}></Container>
    </Container>
  );
}

export default HomeComponentTwo;
