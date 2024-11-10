import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
const Resume = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={6}
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <GridItem w="100%" bg="purple.50">
        {" "}
        Hello{" "}
      </GridItem>
      <GridItem w="100%" bg="purple.50">
        {" "}
        Sample Grid Item{" "}
      </GridItem>
    </Grid>
  );
};

export default Resume;
