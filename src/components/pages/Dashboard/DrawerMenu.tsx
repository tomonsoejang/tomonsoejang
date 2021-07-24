import {
  Box,
  createStyles,
  Drawer,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import MenuItems from "./MenuItems";

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        classes={{ paper: classes.drawer }}
      >
        <MenuItems isMobile={true} onClose={onClose} />
      </Drawer>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "green",
    },
    drawer: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default DrawerMenu;
