import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import {
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LanguageContext from "../../Functions/Context/LanguageContext";

const useStyles = makeStyles({
  footer: {
    position: `relative`,
    bottom: `0px`,
    height: `auto`,
    backgroundColor: `rgb(255,236,217)`,
    color: `dimgray`,
    padding: `1rem`,
    justifyContent: `center`,
  },
  a: {
    color: `dimgray`,
    textDecoration: `none`,
  },
});

function Footer() {
  const classes = useStyles();
  const { Links, Contacts } = useContext(LanguageContext).language;
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      className={classes.footer}
      component="footer"
    >
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <List>
            {Links.map(({ title, path }) => (
              <ListItem style={{ display: "grid" }} component="li" key={title}>
                <Link to={path} className={classes.a}>
                  {title}
                </Link>
              </ListItem>
            ))}
          </List>
          <Grid>
            {Contacts.map((item) => (
              <Typography variant="subtitle2" key={item.tab1}>
                <LocationOnIcon />
                {item.tab1}
              </Typography>
            ))}
            {Contacts.map((item) => (
              <Typography variant="body2" key={item.contacts1}>
                {item.contacts1}
              </Typography>
            ))}
            <hr />

            {Contacts.map((item) => (
              <Typography variant="subtitle2" key={item.tab2}>
                <CallIcon />
                {item.tab2}
              </Typography>
            ))}

            {Contacts.map((item) => (
              <Typography variant="body2" key={item.contacts2}>
                <a className={classes.a} href="tel:029819687">
                  {item.contacts2}
                </a>
              </Typography>
            ))}
            <hr />

            {Contacts.map((item) => (
              <Typography variant="subtitle2" key={item.tab3}>
                <EmailIcon />
                {item.tab3}
              </Typography>
            ))}
            {Contacts.map((item) => (
              <Typography variant="body2" key={item.contacts3}>
                <a className={classes.a} href="office@legalbg.net">
                  {item.contacts3}
                </a>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Footer;
