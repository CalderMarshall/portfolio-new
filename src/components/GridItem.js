import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function GridItem({
  imageUrl,
  title,
  subtitle,
  viewAction,
  editAction,
}) {
  const [loaded, setLoaded] = useState(false);
  const imageStyle = !loaded ? { display: "none" } : {maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'};
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          {!loaded && <div>loading</div>}
          <img
            src={imageUrl}
            style={imageStyle}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </Grid>
  );
}
