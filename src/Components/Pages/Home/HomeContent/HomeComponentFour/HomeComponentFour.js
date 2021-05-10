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
function HomeComponentFour() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      disableGutters={true}
      className={classes.displayDiv}
    >
      <Container align="center" maxWidth="xs" className={classes.center}>
        <Typography variant="h6" draggable={true}>
          Нашият екип има опит и при консултиране на инвеститори за строителство
          на офис и жилищни сгради, както и правна помощ и съдействие при
          продажбата на трети лица на отделните недвижими имоти.
        </Typography>
      </Container>
      <Container className={classes.ParalaxStyle}></Container>
    </Container>
  );
}

export default HomeComponentFour;
