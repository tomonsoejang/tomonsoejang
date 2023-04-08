import { Hidden, HiddenProps } from '@material-ui/core';
import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <>
      {/* @ts-ignore */}
      <Hidden mdUp>
        <MobileNavbar />
      </Hidden>
      {/* @ts-ignore */}
      <Hidden smDown>
        <DesktopNavbar />
      </Hidden>
    </>
  );
};

export default Navbar;
