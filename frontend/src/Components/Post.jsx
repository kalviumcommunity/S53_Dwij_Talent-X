import React from "react";
import "./../App.css";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Post() {
  return (
    <div className="post-parent">
      <div className="explore">Explore</div>
      <div>
        <Grid>
          <GridItem>
            <div className="box">

            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}
