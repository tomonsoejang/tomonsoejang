import { Fab, Link, makeStyles } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
import React from "react";

interface ScrollToTopProps {}

const ScrollToTop: React.FC<ScrollToTopProps> = ({}) => {
  const classes = useStyles();

  return (
    <Fab color="primary" aria-label="add" className={classes.fab}>
      <Link href="#home" color="inherit">
        <ArrowUpward
        // onClick={() => {
        // console.log("hello");
        // window.scrollTo(0, 0);
        // }}
        />
      </Link>
    </Fab>
  );
};

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default ScrollToTop;
