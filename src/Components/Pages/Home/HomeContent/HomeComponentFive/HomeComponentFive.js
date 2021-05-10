import { Container, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Picture from "./read.webp";

const useStyles = makeStyles({
  displayDiv: {
    display: `flex`,
  },
  PictureStyle: {
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
function HomeComponentFive() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      disableGutters={true}
      className={classes.displayDiv}
    >
      <Container className={classes.PictureStyle}></Container>
      <Container align="center" maxWidth="xs" className={classes.center}>
        <Typography variant="h4" draggable={true}>
          Всеки от адвокатите е наложил се професионалист – с широк и
          дългогодишен опит в отрасъла на правото, в който специализира и
          отличен опит в процесуалното представителство.
          {/* A specialist Scottish law firm, providing you with essential personal
          legal services in a clear and straightforward way. */}
        </Typography>
      </Container>
      <Divider />
    </Container>
  );
}

export default HomeComponentFive;
