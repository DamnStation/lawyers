import * as React from "react";
import { Slide, useScrollTrigger } from "@material-ui/core";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;
