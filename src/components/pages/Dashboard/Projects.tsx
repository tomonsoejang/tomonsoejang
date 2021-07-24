import {
  Box,
  createStyles,
  Grid,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import React from "react";
import Chips from "../../commons/Chip/Chips";
import SectionContainer from "../../commons/Layout/SectionContainer";
import Heading from "../../commons/Text/Heading";
import data from "../../data/data";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const classes = useStyles();
  return (
    <Box id="projects">
      <SectionContainer>
        <Heading>Some Things I've Built</Heading>

        <Grid container spacing={2}>
          <Grid item md={3}>
            <img src={data.kyfImage} className={classes.image} />
          </Grid>
          <Grid item md={9}>
            <Grid container spacing={2}>
              <Grid item md={10}>
                <Typography variant="overline">
                  Karbi Youth Festival Android App.
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Link href={data.kyfAppPlayStoreLink} target="_blank">
                  <LaunchIcon color="primary" fontSize="large" />
                </Link>
              </Grid>
            </Grid>
            <Typography variant="body2">
              Built a clone of Karbi Youth Festival Website in Android using
              React Native.
            </Typography>
            <Chips
              data={["React Native", "React Native Elements", "Next.js"]}
            />
          </Grid>
        </Grid>
      </SectionContainer>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
    },
  })
);

export default Projects;
