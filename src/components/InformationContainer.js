import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import pdf from "../static/docs/Calder_Marshall_Resume.pdf";

export default function InformationContainer() {
  return (
    <Container style={{ padding: "0 5px" }} maxWidth={false}>
      <div
        style={{
          backgroundColor: "#ededed",
          borderRadius: 10,
          padding: 15,
          margin: "20px 0px",
        }}
      >
        <Typography style={{ padding: "10px 0px" }} variant="h6">
          Info
        </Typography>
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
