import {
  Box,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import SectionContainer from "../../commons/Layout/SectionContainer";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const classes = useStyles();

  return (
    <SectionContainer>
      <Box className={classes.root}>
        <Typography>Designed and Built by Sarphu Rongpi</Typography>
        <Typography>
          Built using <Link href="https://nextjs.org">Next.js</Link> &{" "}
          <Link href="https://material-ui.com">Material-ui</Link>
        </Typography>
      </Box>
    </SectionContainer>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
  })
);

export default Footer;
