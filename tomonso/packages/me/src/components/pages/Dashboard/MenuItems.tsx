import {
  Box,
  createStyles,
  Link,
  makeStyles,
  styled,
  Switch,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
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

const MenuItemText = styled(Typography)({
  textTransform: 'none',
});

const MenuItems: React.FC<MenuItemsProps> = ({ isMobile, onClose }) => {
  const classes = useStyles({ isMobile });
  const darkMode = false;
  const toggleDarkMode = () => {};

  return (
    <>
      <Link
        href="#about-me"
        color="inherit"
        className={classes.menuButton}
        onClick={onClose}
      >
        <MenuItemText>About</MenuItemText>
      </Link>
      <Link
        href="#experience"
        color="inherit"
        className={classes.menuButton}
        onClick={onClose}
      >
        <MenuItemText>Experience</MenuItemText>
      </Link>
      <Link
        href="#projects"
        color="inherit"
        className={classes.menuButton}
        onClick={onClose}
      >
        <MenuItemText>Projects</MenuItemText>
      </Link>
      <Link
        href="#contact"
        color="inherit"
        className={classes.menuButton}
        onClick={onClose}
      >
        <MenuItemText>Contact</MenuItemText>
      </Link>
      <Link
        href={data.resumeLink}
        color="inherit"
        className={classes.menuButton}
        target="_blank"
        onClick={onClose}
      >
        <MenuItemText>Resume</MenuItemText>
      </Link>
      <Box component="span" className={classes.row}>
        <Typography className={classes.rowText}>Dark</Typography>
        <Switch
          checked={darkMode}
          onChange={() => {
            toggleDarkMode && toggleDarkMode();
          }}
          name="Dark Mode"
          inputProps={{ 'aria-label': 'dark mode' }}
        />
      </Box>
    </>
  );
};

export default MenuItems;
