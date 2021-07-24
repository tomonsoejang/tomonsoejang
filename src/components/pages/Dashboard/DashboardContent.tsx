import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";

interface DashboardContentProps {}

const DashboardContent: React.FC<DashboardContentProps> = ({}) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root} maxWidth="md">
        <Intro />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // paddingTop: 100,
    },
    banner: {
      width: "100%",
    },
  })
);

export default DashboardContent;
