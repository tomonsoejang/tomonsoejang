import {
  Box,
  Button,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';
import React from 'react';
import SectionContainer from '../../commons/Layout/SectionContainer';
import Heading from '../../commons/Text/Heading';
import data from '../../../config/data';

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const margin = 2;
  const classes = useStyles();
  return (
    <Box id="contact" className={classes.root}>
      <SectionContainer>
        <Heading>Get In Touch</Heading>
        <Link
          href={data.linkedInProfile}
          className={classes.items}
          target="_blank"
        >
          <LinkedIn fontSize="large" />
        </Link>
        <Link
          href={data.githubProfile}
          className={classes.items}
          target="_blank"
        >
          <GitHub fontSize="large" />
        </Link>
        <Link
          href={data.instagramProfile}
          className={classes.items}
          target="_blank"
        >
          <Instagram fontSize="large" />
        </Link>
        <Box my={margin}>
          <Button
            href="mailto:tomonso.ejang@gmail.com"
            variant="outlined"
            color="primary"
          >
            <Typography>Say Hello</Typography>
          </Button>
        </Box>
      </SectionContainer>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    items: {
      margin: 20,
    },
  })
);

export default Contact;
