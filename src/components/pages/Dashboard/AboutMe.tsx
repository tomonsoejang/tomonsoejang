import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Chips from "../../commons/Chip/Chips";
import SectionContainer from "../../commons/Layout/SectionContainer";
import Heading from "../../commons/Text/Heading";
import data from "../../data/data";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = ({}) => {
  const margin = 2;
  const [hover, setHover] = useState(false);
  const classes = useStyles({ hover });

  const onMouseOver = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <Box id="about-me">
      <SectionContainer>
        <Heading>About Me</Heading>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <Typography align="justify">
              Hello! My name is Sarphu Rongpi. I am a Full Stack web developer
              with industry experience building websites and web applications. I
              specialize in JavaScript and have professional experience working
              with Laravel. I also have experience working with Vue and Flask. I
              have also worked on React.js projects. I found it to be very
              productive to work in React, as It allows me to work in both web
              as well mobile platforms. Using React Native Framework, I have
              build Android apps and also published it to playstore using
              fastlane.
            </Typography>
            <Box my={margin}>
              <Typography variant="h6">
                Here are a few technologies I've been working with recently:
              </Typography>
              <Box marginTop={margin}>
                <Chips data={data.aboutMe.technologies} />
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} className={classes.image}>
            <img
              className={classes.image}
              src={data.profileImage}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            />
          </Grid>
        </Grid>
      </SectionContainer>
    </Box>
  );
};

interface StyleProps {
  hover: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: (props: StyleProps) => ({
      width: "100%",
      borderRadius: "10%",
      filter: props.hover ? "grayscale(0%)" : "grayscale(100%)",
    }),
    // root: {
    //   width: "100%",
    //   flexGrow: 1,
    //   backgroundImage: `url(${Image})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center center",
    // },
    paper: {
      // padding: theme.spacing(2),
      // textAlign: "center",
      // color: theme.palette.text.secondary,
    },
  })
);

export default AboutMe;
