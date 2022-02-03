import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ATL from "../static/images/atlanta-united-fc.svg";
import OUT from "../static/images/outkast.png";
import SEAL from "../static/images/seal.png";
import BRAVES from "../static/images/braves.png";

export default function AboutContainer() {
  return (
    <Container style={{ padding: "0 5px" }} maxWidth={false}>
      <div
        style={{
          padding: "0px 15px",
        }}
      >
        <Typography variant="h5" paragraph align="left">
          About Me
        </Typography>
        <Typography paragraph variant="subtitle1">
          Hey, I'm Calder, a Javascript developer at{" "}
          <Link target="none" href="https://www.wahoofitness.com/">
            Wahoo Fitness
          </Link>{" "}
          in Atlanta.
        </Typography>
        <Typography paragraph>
          Most of my career has been spent writing front end Javascript,
          primarily using React. In my current role at Wahoo, I spend ample time
          doing MVC work in Ruby on Rails. I am also building an extensive
          mobile-first React application, and working on services in NodeJS.
        </Typography>
        <Typography paragraph>
          I advocate for, and prefer using, modern Javascript features and the
          Ecmascript syntax. That being said, I'm no stranger to jQuery and
          native browser javascript. Most recently at Wahoo, I've been working
          on file processing pipelines for user devices.
        </Typography>
        <Typography paragraph>
          I support and believe in unit testing. I've held roles where
          developers are completley responsible for maintaining quality, and
          I've also worked with QA engineers. At Sharecare, I played a large
          part in updating the Health Profile section of their Web Application
          to meet{" "}
          <Link
            target="none"
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          >
            accesibility standards
          </Link>
          .
        </Typography>
        <Typography paragraph>
          My programming career started at{" "}
          <Link target="none" href="https://www.digitalcrafts.com/">
            Digital Crafts
          </Link>{" "}
          in Buckhead, February of 2017.
        </Typography>
        <Typography paragraph>
          I am truly a problem solver at heart, which lends aptitude towards my
          skills as a developer. Outside of work, I spend hours tackling more
          physical challenges. This mostly consists of riding my bicycle in the
          woods. Or working on cars, bicycles, and motorbikes.
        </Typography>
      </div>
      <div className="pad-15">
        <div className="logo-container">
          <img src={SEAL} alt="City Of Atlanta Seal" height="50" width="50" />
          <img src={ATL} alt="Atlanta United" height="50" width="50" />
          <img src={OUT} alt="Outkast" height="50" width="74" />
          <img src={BRAVES} alt="Atlanta Braves" height="50" width="50" />
        </div>
        <div className="d-flex j-center">
          <Typography>
            I love the outdoors, but this city has my heart.
          </Typography>
        </div>
      </div>
    </Container>
  );
}
