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
function HomeComponentThree() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      disableGutters={true}
      className={classes.displayDiv}
    >
      <Container className={classes.PictureStyle}></Container>
      <Container align="center" maxWidth="xs" className={classes.center}>
        <Typography variant="body1" draggable={true}>
          <p>
            Кантората има значителен опит в извънсъдебно и съдебно събиране на
            вземания, както и производства по несъстоятелност. На нашият опит и
            професионализъм са се доверили редица небанкови финансови
            институции, лизингови компании и инвестиционни банки.
          </p>
          Кантората има значителен опит в извънсъдебно и съдебно събиране на
          <p>
            Нашият екип има опит и при консултиране на инвеститори за
            строителство на офис и жилищни сгради, както и правна помощ и
            съдействие при продажбата на трети лица на отделните недвижими
            имоти.
          </p>
          <p>
            Всеки от адвокатите е наложил се професионалист – с широк и
            дългогодишен опит в отрасъла на правото, в който специализира и
            отличен опит в процесуалното представителство.
          </p>
          <p>
            С високия професионализъм на своя екип, дружеството напълно отговаря
            на изискванията на своите клиенти за ефективност, резултатност,
            експертно и всеобхватно обслужване.
          </p>
          {/* A specialist Scottish law firm, providing you with essential personal
          legal services in a clear and straightforward way. */}
        </Typography>
      </Container>
      <Divider />
    </Container>
  );
}

export default HomeComponentThree;
