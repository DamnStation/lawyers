import { Container, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import LanguageContext from "../../Functions/Context/LanguageContext";
import MapComponent from "./Map/Map";
const useStyles = makeStyles({
  WrapperStyle: {
    display: `flex`,
    margin: `0px`,
    padding: `0px`,
    position: `center`,
    justifyContent: `center`,
  },
  Content: {
    justifyContent: `right`,
  },
  Map: {
    margin: `1rem`,
  },
});

function Contacts() {
  const classes = useStyles();
  const {
    language: { Contacts },
  } = useContext(LanguageContext);
  return (
    <Container
      className={classes.WrapperStyle}
      maxWidth={false}
      disableGutters={true}
    >
      <Container maxWidth="md">
        {Contacts.map((item) => (
          <Container
            key={item.contacts1}
            maxWidth={false}
            disableGutters={true}
            className={classes.Content}
          >
            <Container component="p" maxWidth={false} disableGutters={true}>
              {item.contacts1}
            </Container>
            <Container maxWidth={false} disableGutters={true}>
              {item.contacts2}
            </Container>
            <Container maxWidth={false} disableGutters={true}>
              {item.contacts3}
            </Container>
          </Container>
        ))}
        <Container disableGutters={true} className={classes.Map}>
          <MapComponent />
        </Container>
      </Container>
    </Container>
  );
}

export default Contacts;
