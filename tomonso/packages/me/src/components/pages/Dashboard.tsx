import { Box, makeStyles } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import ScrollToTop from "../commons/ScrollToTop";
import DashboardContent from "./Dashboard/DashboardContent";
import Navbar from "./Dashboard/Navbar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Sarphu Rongpi Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box id="home" className={classes.root}>
        <Navbar />
        <DashboardContent />
        <ScrollToTop />
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 30,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default Dashboard;
