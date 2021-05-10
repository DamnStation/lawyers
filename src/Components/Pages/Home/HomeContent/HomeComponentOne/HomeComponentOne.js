import { Container, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext } from "react";
import LanguageContext from "../../../../Functions/Context/LanguageContext";
const useStyles = makeStyles({
  flexDiv: {
    paddingTop: `1rem`,
    paddingBottom: `1rem`,
    marginTop: `auto`,
    marginBottom: `auto`,
    width: `100%`,
    display: `flex`,
    flexDirection: `column`,
    border: `4px solid rgb(235, 206, 46)`,
    borderTop: `2px solid rgb(235, 206, 46)`,
    borderBottom: `2px solid rgb(235, 206, 46)`,
    borderRadius: `45px`,
  },
  flexRow: {
    display: `flex`,
    flexDirection: `row`,
    paddingTop: `1rem`,
    paddingBottom: `1rem`,
    marginTop: `auto`,
    marginBottom: `auto`,
  },
});
function HomeComponentOne() {
  const { HomeTab } = useContext(LanguageContext).language;
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.flexRow}>
      {HomeTab.map((item) => (
        <Container maxWidth={false} key={item}>
          <Divider />
          <Container key={item.content1}>
            <Typography variant="h5" draggable={true} key={item.title1}>
              {item.title1}
            </Typography>
            <Typography variant="overline" draggable={true} paragraph={true}>
              {item.content1}
            </Typography>
          </Container>
          <Container key={item.content2}>
            <Typography
              variant="overline"
              draggable={true}
              paragraph={true}
              key={item.content2}
            >
              {item.content2}
            </Typography>
          </Container>
          <Container key={item.content3}>
            <Typography variant="overline" draggable={true} paragraph={true}>
              {item.content3}
            </Typography>
          </Container>
          <Container key={item.content4}>
            <Typography variant="overline" draggable={true} paragraph={true}>
              {item.content4}
            </Typography>
          </Container>
          <Container key={item.content5}>
            <Typography variant="overline" draggable={true} paragraph={true}>
              {item.content5}
            </Typography>
          </Container>
          <Container key={item.content6}>
            <Typography variant="overline" draggable={true} paragraph={true}>
              {item.content6}
            </Typography>
          </Container>
          <Container key={item.content7}>
            <Typography variant="overline" draggable={true} paragraph={true}>
              {item.content7}
            </Typography>
          </Container>
          <Divider />
        </Container>
      ))}
    </Container>
  );
}

export default HomeComponentOne;
