import { Hidden } from "@material-ui/core";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <>
      <Hidden mdUp>
        <MobileNavbar />
      </Hidden>
      <Hidden smDown>
        <DesktopNavbar />
      </Hidden>
    </>
  );
};

export default Navbar;
