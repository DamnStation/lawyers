import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import HomeComponentOne from "../HomeComponentOne/HomeComponentOne";
import CoverPhoto from "../../Image/background1903x500px.jpg";
const useStyles = makeStyles({
  ImageStyle: {
    backgroundImage: `url(${CoverPhoto})`,
    backgroundSize: `cover`,
    backgroundRepeat: `round`,
    width: `100%`,
    height: `500px`,
    borderBottom: `4px solid rgb(235, 206, 46)`,
  },
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
      <Container
        component="picture"
        disableGutters={true}
        maxWidth={false}
        className={classes.ImageStyle}
      ></Container>
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
