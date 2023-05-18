import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import data from '../../../config/data';
import MenuItems from './MenuItems';

interface DesktopNavbarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      position: 'absolute',
      justifyContent: 'flex-end',
      paddingTop: 30,
      color: 'white',
      // backgroundImage: `url(${data.bannerImage})`,
      backgroundSize: 'cover',
    },
    title: {
      flexGrow: 1,
    },
    menuContainer: {
      display: 'flex',
      alignItems: 'center',
      color: 'black',
    },
    menuItem: {
      margin: 20,
    },
    banner: {
      width: '100%',
    },
  })
);

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.menuContainer}>
        <MenuItems />
      </Box>
    </Box>
  );
};

export default DesktopNavbar;
