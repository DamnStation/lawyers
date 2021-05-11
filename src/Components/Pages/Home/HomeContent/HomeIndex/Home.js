import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import HomeComponentOne from "../HomeComponentOne/HomeComponentOne";
import HomeComponentPicture from "../HomeComponentPicture/HomeComponentPicture";

const useStyles = makeStyles({
  center: {
    justifyContent: `center`,
    textAlighn: `center`,
  },
  componentTwo: {
    backgroundColor: `rgb(222,221,225)`,
    paddingTop: `1rem`,
    paddingBottom: `1rem`,
  },
  componentThree: {
    backgroundColor: `floralwhite`,
    paddingTop: `1rem`,
    paddingBottom: `1rem`,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <Container disableGutters={true} maxWidth={false}>
      <HomeComponentPicture />
      <Container
        disableGutters={true}
        align="center"
        maxWidth="md"
        className={classes.center}
      >
        <HomeComponentOne />
      </Container>
    </Container>
  );
}

export default Home;
