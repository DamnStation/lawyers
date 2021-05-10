import { Container, Divider, Typography, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import LanguageContext from "../../Functions/Context/LanguageContext";

const useStyles = makeStyles({
  ContainerStyles: {},
});

function LegalServices() {
  const classes = useStyles();
  const {
    language: { LegalServices },
  } = useContext(LanguageContext);
  return (
    <Container maxWidth="xl" align="center" className={classes.ContainerStyles}>
      {LegalServices.map((item) => (
        <Container key={item.title1}>
          <Typography variant="h5" draggable={true}>
            {item.title1}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content1_1}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content1_2}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content1_3}
          </Typography>
          <Divider />
          <Typography draggable={true} paragraph={true} variant="h5">
             {item.title2}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content2_1}
          </Typography>
          <Divider />
          <Typography draggable={true} paragraph={true} variant="h5">
            {item.title3}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content3_1}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content3_2}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content3_3}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content3_4}
          </Typography>
          <Typography draggable={true} paragraph={true} variant="overline">
            {item.content3_5}
            <Container
              component="a"
              href="https://dp-lawfirm.com/вещно-право-и-недвижими-имоти"
              target="_blank"
            >
              {item.content3_6}
            </Container>
          </Typography>
        </Container>
      ))}
    </Container>
  );
}
export default LegalServices;
