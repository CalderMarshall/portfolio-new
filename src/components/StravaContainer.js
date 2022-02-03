import React from "react";
import Container from "@mui/material/Container";

export default function StravaContainer() {
  return (
    <Container style={{ marginTop: 20, padding: "0 5px" }}>
      <div className="strava-container">
        <iframe
          title="strava-activities"
          scrolling="yes"
          height="460"
          width="300"
          frameBorder="0"
          allowtransparency="true"
          src="https://www.strava.com/athletes/27827377/latest-rides/bce2302cb12748565c419934686c1f4f8c698031"
        ></iframe>
      </div>
    </Container>
  );
}
