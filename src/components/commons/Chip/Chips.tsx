import { Box, Chip, Grid } from "@material-ui/core";
import React from "react";

interface ChipsProps {
  data: string[];
}

const Chips: React.FC<ChipsProps> = ({ data }) => {
  const margin = 2;
  return (
    <Grid container spacing={3}>
      {data.map((val) => {
        return (
          <Box marginLeft={margin} marginTop={margin} key={val}>
            <Chip label={val} color="primary" />
          </Box>
        );
      })}
    </Grid>
  );
};

export default Chips;
