import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GridItem from "./GridItem";
import Container from "@mui/material/Container";

export default function ImagesGrid() {
  return (
    <Container style={{ padding: "0 5px" }}>
      <div
        style={{
          backgroundColor: "#ededed",
          borderRadius: 10,
          padding: 15,
        }}
      >
        <Typography variant="h6" paragraph align="center">
          Here's how I spend my free time!
        </Typography>
        <Grid container spacing={3}>
          <GridItem
            imageUrl={require("../static/images/trackstand.jpg")}
            title={"Rope Mill Park"}
            subtitle={"Woodstock, GA"}
          />
          <GridItem
            imageUrl={require("../static/images/beer_run.jpg")}
            title={"Talladega National Forest Skyway"}
            subtitle={"Eastern Alabama"}
          />
          <GridItem
            imageUrl={require("../static/images/pisgah.jpg")}
            title={"Looking Glass Falls"}
            subtitle={"Brevard, NC"}
          />
          <GridItem
            imageUrl={require("../static/images/harley.jpg")}
            title={"Fort Mountain"}
            subtitle={"GA-52, Chatsworth, GA"}
          />
          <GridItem
            imageUrl={require("../static/images/driftwood.jpg")}
            title={"Driftwood Trail"}
            subtitle={"Acworth, GA"}
          />
          <GridItem
            imageUrl={require("../static/images/vail.jpg")}
            title={"Vail Ski Resort"}
            subtitle={"Vail, CO"}
          />
          <GridItem
            imageUrl={require("../static/images/bmw.jpg")}
            title={"My E61"}
            subtitle={"Atlanta, GA"}
          />
          <GridItem
            imageUrl={require("../static/images/kitchen.jpg")}
            title={"Pico de Gallo"}
            subtitle={"Nashville, TN"}
          />
          <GridItem
            imageUrl={require("../static/images/south_loop.jpg")}
            title={"South Loop Trail"}
            subtitle={"Woodstock, GA"}
          />
          <GridItem
            imageUrl={require("../static/images/red_rocks.jpg")}
            title={"Red Rocks Amphitheatre"}
            subtitle={"Morrison, CO"}
          />
          <GridItem
            imageUrl={require("../static/images/woodys.jpg")}
            title={"Woody's Cheesesteaks"}
            subtitle={"Atlanta, GA"}
          />
          <GridItem
            imageUrl={require("../static/images/fats.jpg")}
            title={"Forks Area Trail System"}
            subtitle={"Clarks Hill, SC"}
          />
        </Grid>
      </div>
    </Container>
  );
}
