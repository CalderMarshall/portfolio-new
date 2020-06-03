import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import pdf from "../static/docs/Calder_Marshall_Resume.pdf";
import ATL from "../static/images/atlanta-united-fc.svg";
import OUT from "../static/images/outkast.png";
import SEAL from "../static/images/seal.png";
import BRAVES from "../static/images/braves.png";

export default function AboutContainer() {
  return (
    <Container style={{ padding: "0 5px" }} maxWidth={false}>
      <div
        style={{
          backgroundColor: "#ededed",
          borderRadius: 10,
          padding: 15,
        }}
      >
        <Typography variant="h6" paragraph align="left">
          About Me
        </Typography>
        <Typography paragraph variant="subtitle1">
          Hey, I'm Calder, a User Interface Engineer for{" "}
          <Link target="none" href="https://about.sharecare.com/">
            Sharecare
          </Link>{" "}
          in Atlanta.
        </Typography>
        <Typography paragraph>
          I spend most of my time at Sharecare building functional React
          components for our web platform. You can view the web platform after
          creating an{" "}
          <Link target="none" href="https://you.sharecare.com/">
            account
          </Link>
          . My work demands using modern features of Javascript and the
          Ecmascript syntax.
        </Typography>
        <Typography paragraph>
          I also spend a fair amount of time unit testing these components to
          ensure they will work properly. In addition, towards the end of 2019,
          I played a large part in updating certain sections of the Sharecare
          Web Application to meet{" "}
          <Link
            target="none"
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          >
            accesibility standards
          </Link>
          .
        </Typography>
        <Typography paragraph>
          This also includes making these views compliant in older, less modern
          browsers. My work at Sharecare also includes working with and
          debugging NodeJS servers when necessary.
        </Typography>
        <Typography paragraph>
          My programming career started at{" "}
          <Link target="none" href="https://www.digitalcrafts.com/">
            Digital Crafts
          </Link>{" "}
          in Buckhead, February of 2017.
        </Typography>
        <Typography paragraph>
          Want to learn more about my qualifications and experience? Take a look
          at my{" "}
          <Link target="none" href={pdf}>
            resume
          </Link>
          .
        </Typography>
        <Typography paragraph>
          I am truly a problem solver at heart, which lends aptitude towards my
          skills as a developer. Outside of work, I spend a large amount of time
          maintaining, repairing, riding, and modifying, my mountain bikes,
          motorcyle, and car.
        </Typography>
        <Typography paragraph>
          That sweet 1987 Chevrolet G20 Van is my current outside of work
          project. My girlfriend Allyson and I were lucky enough to buy this van
          in Savannah for $330. We're really looking forward to getting it on
          the road and going on some awesome mountain biking trips!
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: "#ededed",
          borderRadius: 10,
          padding: 15,
          margin: "20px 0px",
        }}
      >
        <img
          style={{ margin: "0px 5px" }}
          src={SEAL}
          alt="City Of Atlanta Seal"
          height="50"
          width="50"
        />
        <img
          style={{ margin: "0px 5px" }}
          src={ATL}
          alt="Atlanta United"
          height="50"
          width="50"
        />
        <img
          style={{ margin: "0px 5px" }}
          src={OUT}
          alt="Outkast"
          height="50"
          width="74"
        />
        <img
          style={{ margin: "0px 5px" }}
          src={BRAVES}
          alt="Atlanta Braves"
          height="50"
          width="50"
        />

        <Typography style={{ padding: "10px 0px" }} variant="h6">
          Atlanta, GA
        </Typography>
        <Typography paragraph>
          I was born and raised here. I love the outdoors, but this city has my
          heart.
        </Typography>
      </div>
    </Container>
  );
}
