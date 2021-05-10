import * as React from "react";
import { Zoom, useScrollTrigger } from "@material-ui/core";

const style = {
  button: {
    position: `fixed`,
    bottom: `1rem`,
    right: `1rem`,
    zIndex: `99`,
    color: `#727272`,
  },
};

function BackToTop({ children }) {
  const trigger = useScrollTrigger();

  function handleClick(event) {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <Zoom in={trigger} style={style.button}>
      <div onClick={handleClick} role="presentation">
        {children}
      </div>
    </Zoom>
  );
}

export default BackToTop;
