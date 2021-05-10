import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import LanguageContext from "../../../Functions/Context/LanguageContext";
import OutlinedFlagTwoToneIcon from "@material-ui/icons/OutlinedFlagTwoTone";

export default function LanguageButton() {
  const { dispatch } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <OutlinedFlagTwoToneIcon />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => dispatch(`Bulgarian`)}>Български</MenuItem>
        <MenuItem onClick={() => dispatch(`English`)}>English</MenuItem>
      </Menu>
    </div>
  );
}
