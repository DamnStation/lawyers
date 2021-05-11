import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
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
});
function HomeComponentFive() {
  const classes = useStyles();
  return (
    <Container
      component="picture"
      disableGutters={true}
      maxWidth={false}
      className={classes.ImageStyle}
    ></Container>
  );
}

export default HomeComponentFive;
