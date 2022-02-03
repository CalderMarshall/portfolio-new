import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import pdf from "../static/docs/Calder_Marshall_Resume.pdf";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function TitleContainer() {
  return (
    <Container>
      <Typography variant="h6" align="center" color="textSecondary">
        Javascript developer native to Atlanta, GA
      </Typography>
      <div className="d-flex j-center">
        <Typography>
          <Link
            style={{ paddingRight: "10px" }}
            underline="none"
            target="none"
            href={pdf}
          >
            <Button variant="text">Resume</Button>
          </Link>
          <Link
            underline="none"
            target="none"
            href="http://www.linkedin.com/in/calder-marshall"
          >
            <Button variant="text">LinkedIn</Button>
          </Link>
        </Typography>
      </div>
    </Container>
  );
}
