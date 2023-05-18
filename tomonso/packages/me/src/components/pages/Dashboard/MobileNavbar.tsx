import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import DrawerMenu from "./DrawerMenu";
import useDrawerMenu from "./useDrawerMenu";

interface MobileNavbarProps {}

const MobileNavbar: React.FC<MobileNavbarProps> = ({}) => {
  const classes = useStyles();
  const { open, openDrawerMenu, closeDrawerMenu } = useDrawerMenu();
  return (
    <Box className={classes.root}>
      <Menu fontSize="large" onClick={openDrawerMenu} />
      <DrawerMenu open={open} onClose={closeDrawerMenu} />
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "flex-end",
    },
  })
);

export default MobileNavbar;
