import {
  Box,
  createStyles,
  Link,
  makeStyles,
  Switch,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { StoreContext } from '../../../Store';
import data from '../../../config/data';

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
      textTransform: 'uppercase',
      marginTop: props.isMobile ? theme.spacing(2) : 0,
    }),
    row: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-around',
    },
    rowText: (props: StyleProps) => ({
      textTransform: 'uppercase',
      marginTop: props.isMobile ? theme.spacing(2) : 0,
    }),
  })
);

const MenuItems: React.FC<MenuItemsProps> = ({ isMobile, onClose }) => {
  const classes = useStyles({ isMobile });
  const [{ darkMode }, toggleDarkMode] = useContext(StoreContext);

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
      <Box component="span" className={classes.row}>
        <Typography className={classes.rowText}>Dark</Typography>
        <Switch
          checked={darkMode}
          onChange={() => {
            toggleDarkMode();
          }}
          name="Dark Mode"
          inputProps={{ 'aria-label': 'dark mode' }}
        />
      </Box>
    </>
  );
};

export default MenuItems;
