import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.root}>
      {children}
    </Typography>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 20,
    },
  })
);

export default Heading;
