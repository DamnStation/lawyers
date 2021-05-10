import {
  AppBar,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Fab,
  Breadcrumbs,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import React, { useContext } from "react";
import HideOnScroll from "../HideOnScroll/HideOnScroll";
import SideDrawer from "../SideDrawer/SideDrawer";
import { Link } from "react-router-dom";
import NavImage from "./logo.png";
import BackToTop from "../BackToTop/BackToTop";
import LanguageContext from "../../../Functions/Context/LanguageContext";
import LanguageButton from "../LanguageButton/LanguageButton";

const useStyles = makeStyles({
  aboveNav: {
    width: `100%`,
    display: `inline`,
    textAlign: `center`,
    justifyContent: `space-around`,
    backgroundColor: `#727272`,
  }, //`#727272`
  aboveNavLinks: {
    color: `currentColor`,
    textDecoration: `none`,
    margin: `1em`,
    marginBottom: `1,5em`,
    textAlign: `center`,
  },
  background: {
    backgroundColor: `rgb(255,236,217)`,
    borderBottom: `2px solid black`,
  },
  navLogo: {
    display: `flex`,
    backgroundImage: `url(${NavImage})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    width: `200px`,
    height: `60px`,
    maxHeight: `10vh`,
    margin: `5px`,
    paddingBottom: `1rem`,
    paddingRight: `1rem`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navListDisplayFlex: {
    marginTop: `auto`,
    marginBottom: `auto`,
    display: `flex`,
    flexWrap: `nowrap`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `dimgray`,
  },
  linkBackground: {
    backgroundColor: `rgb(255,236,217)`,
  },
  backToTopDiv: {
    margin: `0px`,
    display: `table-column`,
  },
  sideDrawer: {
    backgroundColor: `rgb(255,236,217)`,
  },
});
// state ? navLinksBG : navLinksEN;
function NavBar() {
  const classes = useStyles();
  const {
    language: { Links },
  } = useContext(LanguageContext);
  return (
    <Container disableGutters={true} maxWidth={false}>
      <HideOnScroll>
        <AppBar position="relative">
          <Container maxWidth={false} className={classes.aboveNav}>
            <Typography variant="caption">
              <CallIcon />
              <a className={classes.aboveNavLinks} href="tel:029819687">
                02 981 9687
              </a>
            </Typography>
            <Typography variant="caption">
              <EmailIcon />
              <a
                className={classes.aboveNavLinks}
                href="mailto:office@legalbg.net"
              >
                office@legalbg.net
              </a>
            </Typography>
          </Container>
          <Toolbar component="nav" className={classes.background}>
            <Container maxWidth={false} className={classes.navbarDisplayFlex}>
              <Link to="/" className={classes.navLogo}>
                <Container> </Container>
              </Link>

              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navListDisplayFlex}
                >
                  <Breadcrumbs aria-label="breadcrumb">
                    {Links.map(({ title, path }) => (
                      <Container
                        disableGutters={true}
                        key={title}
                        className={classes.linkBackground}
                      >
                        <Link
                          to={path}
                          key={title}
                          className={classes.linkText}
                        >
                          <ListItem button key={title}>
                            <ListItemText primary={title} />
                          </ListItem>
                        </Link>
                        {/* <Typography color="textPrimary"></Typography> */}
                      </Container>
                    ))}
                  </Breadcrumbs>
                </List>
                <LanguageButton />
              </Hidden>
              <Hidden mdUp>
                <SideDrawer navLinks={Links} className={classes.sideDrawer} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar className={classes.backToTopDiv} id="back-to-top-anchor" />
      <BackToTop>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </Container>
  );
}

export default NavBar;
