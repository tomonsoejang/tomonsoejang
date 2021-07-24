import {
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import data from "../../data/data";

/**
 * onClose: In Mobile displays, when user click on a menuItem, close the drawerMenu
 */
interface MenuItemsProps extends StyleProps {
  onClose?: () => void;
}

interface StyleProps {
  isMobile?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: (props: StyleProps) => ({
      marginRight: props.isMobile ? 0 : theme.spacing(10),
      textTransform: "uppercase",
      marginTop: props.isMobile ? theme.spacing(2) : 0,
    }),
  })
);

const MenuItems: React.FC<MenuItemsProps> = ({ isMobile, onClose }) => {
  const classes = useStyles({ isMobile });

  return (
    <>
      <Link
        href="#about-me"
        color="inherit"
        className={classes.menuButton}
        onClick={onClose}
      >
        <Typography>About</Typography>
      </Link>
      <Link
        href="#experience"
        color="inherit"
        className={classes.menuButton}
        onClick={onClose}
      >
        <Typography>Experience</Typography>
      </Link>
      <Link
        href="#projects"
        color="inherit"
        className={classes.menuButton}
        onClick={onClose}
      >
        <Typography>Projects</Typography>
      </Link>
      <Link
        href="#contact"
        color="inherit"
        className={classes.menuButton}
        onClick={onClose}
      >
        <Typography>Contact</Typography>
      </Link>
      <Link
        href={data.resumeLink}
        color="inherit"
        className={classes.menuButton}
        target="_blank"
        onClick={onClose}
      >
        <Typography>Resume</Typography>
      </Link>
    </>
  );
};

export default MenuItems;
