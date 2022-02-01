import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <Container>
      <Typography
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
        variant="subtitle2"
        color="textSecondary"
        component="p"
      >
        Made with <FavoriteIcon color="error" style={{ margin: "-2px 5px" }} />
        in Woodstock, GA.
      </Typography>
    </Container>
  );
}
