import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function SkillsContainer() {
  const skillsList = [
    "Javascript",
    "React",
    "Ruby",
    "HTML/CSS",
    "Node.js",
    "Rails",
    "Jest",
    "React Native",
    "SQL",
    "AWS",
    "Jenkins",
  ];
  return (
    <Container style={{ marginTop: 0, padding: "0 5px" }}>
      <div className="pad-15">
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" paragraph align="left">
            Core Competencies
          </Typography>
        </Container>
        <Grid container spacing={0} className="skills-grid">
          {skillsList.map((skill, index) => (
            <Grid key={index} item xs={4} s={4} md={4} lg={4} xl={4}>
              <Container style={{ padding: 0 }}>
                <div
                  style={{
                    color: "#F2453D",
                    minWidth: 85,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="subtitle1">{skill}</Typography>
                </div>
              </Container>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
