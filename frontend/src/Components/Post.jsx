import React from "react";
import "./../App.css";
import { Grid, GridItem, Text } from "@chakra-ui/react";

export default function Post() {
  return (
    <div className="post-parent">
      <div className="explore">
        <Text color="white">Explore</Text>
      </div>
      <div>
        <Grid>
          <GridItem>
            <div className="box"></div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}
