import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import pdf from "../static/docs/Calder_Marshall_Resume.pdf";

export default function InformationContainer() {
  return (
    <Container style={{ padding: "0 5px" }} maxWidth={false}>
      <div
        style={{
          padding: 15,
          margin: "20px 0px",
        }}
      >
        <Typography>
          <Link
            target="none"
            href="https://www.linkedin.com/in/calder-marshall"
          >
            LinkedIn
          </Link>
        </Typography>
        <Typography>
          <Link target="none" href={pdf}>
            Resume
          </Link>
        </Typography>
      </div>
    </Container>
  );
}
