import { Container, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import URL_API_KEY from "../../../API_KEY/API_KEYS.json";

const useStyles = makeStyles({
  WrapperStyle: {
    height: `684px`,
    display: `flex`,
    marginLeft: `4px`,
    marginRight: `4px`,
    padding: `0px`,
    position: `center`,
    justifyContent: `center`,
  },
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
});

function News() {
  const classes = useStyles();

  const [blogs, setBlogs] = useState([]);

  const URL = URL_API_KEY.API_KEY.Blogger.Key;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setBlogs(data.items);
    };
    fetchData();
  }, [URL]);
  console.log(blogs);
  //const URL_IFRAME = "https://testtesttestasddsa.blogspot.com/";
  return (
    <Container disableGutters maxWidth={false}>
      {/* <Iframe
        url={URL_IFRAME}
        width="100%"
        height="80%"
        id="myId"
        className="myClassname"
        display="inline"
        position="absolute"
        overflow
        frameBorder="0"
        allowFullScreen={true}
      /> */}
      {blogs.map((item) => (
        <Container maxWidth="lg" key={item.id}>
          <Paper variant="elevation" square elevation={15}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  variant="body2"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  component="p"
                />
              </CardContent>
            </Card>
          </Paper>
          <br />
        </Container>
      ))}
    </Container>
  );
}

export default News;
