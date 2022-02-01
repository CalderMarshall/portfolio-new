import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  DirectionsBike,
  TwoWheeler,
  Computer,
  Code,
  FilterHdr,
  Build,
} from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TopBar() {
  return (
    <AppBar position="relative">
      <Toolbar style={{ margin: 0, padding: 0, marginLeft: 5 }}>
        <Typography variant="h6" color="inherit" style={{ margin: "0px 5px" }}>
          Calder Marshall
        </Typography>
        <div
          style={{
            display: "flex",
            opacity: 0.6,
            justifyContent: "space-evenly",
            minWidth: 190,
            alignItems: "center",
          }}
        >
          <Code />
          <Computer />
          <Build className="wrench" />
          <DirectionsBike style={{ marginBottom: 6 }} />
          <FilterHdr />
          <TwoWheeler />
        </div>
      </Toolbar>
    </AppBar>
  );
}
