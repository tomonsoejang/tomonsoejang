import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import SectionContainer from "../../commons/Layout/SectionContainer";

interface IntroProps {}

const Intro: React.FC<IntroProps> = ({}) => {
  const classes = useStyles();
  const margin = 2;

  return (
    <Box id="intro" className={classes.nothing}>
      <SectionContainer>
        <Box my={margin}>
          <Typography variant="h6">Hi, my name is</Typography>
        </Box>
        <Box my={margin}>
          <Typography variant="h1">Sarphu Rongpi.</Typography>
        </Box>
        <Box my={margin}>
          <Typography variant="h2">Usually React for web &</Typography>
          <Typography variant="h2">React Native for Mobile.</Typography>
        </Box>
        {/* <Box my={margin}>
          <Typography variant="body1" align="justify">
            I'm a full stack web developer.
          </Typography>
        </Box> */}
        <Box my={margin}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={classes.margin}
            href="mailto:tomonso.ejang@gmail.com"
          >
            GET IN TOUCH
          </Button>
        </Box>
      </SectionContainer>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nothing: {
      // marginBottom: 150,
    },
    margin: {
      marginTop: theme.spacing(5),
      // marginBottom: theme.spacing(5),
    },
    // root: {
    //   display: "flex",
    //   height: 300,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   backgroundImage: `url(${Image})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center center",
    // },
    heading: {
      fontWeight: 800,
    },
  })
);

export default Intro;
