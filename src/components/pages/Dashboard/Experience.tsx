import { Box, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import SectionContainer from "../../commons/Layout/SectionContainer";
import Heading from "../../commons/Text/Heading";
import { experiences } from "./experiences";

interface ExperienceProps {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  title: string;
}

function TabPanel(props: TabPanelProps) {
  const { title, children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography variant="h6">{title}</Typography>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Experience: React.FC<ExperienceProps> = ({}) => {
  const classes = useStyles();

  const [dense, setDense] = React.useState(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box id="experience">
      <SectionContainer>
        <Heading>Experience</Heading>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              label="Conversion Bug: July 2017 - Mar 2018"
              {...a11yProps(0)}
            />
            <Tab
              label="Conversion Bug: Apr 2018 - May 2019"
              {...a11yProps(1)}
            />
          </Tabs>
          <TabPanel
            value={value}
            index={0}
            title="Software Developer @ Conversion Bug"
          >
            <span className={classes.demo}>
              <List dense={dense}>{experiences.cbSD.map(renderListItem)}</List>
            </span>
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            title="Associate Software Developer @ Conversion Bug"
          >
            <span className={classes.demo}>
              <List dense={dense}>
                {experiences.cbAssociateSD.map(renderListItem)}
              </List>
            </span>
          </TabPanel>
        </div>
      </SectionContainer>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

const renderListItem = (text: string) => {
  return (
    <ListItem key={text}>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default Experience;
