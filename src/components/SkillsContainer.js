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
    <Container style={{ marginTop: 20, padding: "0 5px" }}>
      <div
        style={{padding: 15}}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#F2453D",
            fontWeight: 600,
            paddingBottom: "15px",
          }}
        >
          Core Competencies
        </Container>
        <Grid container spacing={1}>
          {skillsList.map((skill) => (
            <Grid key={skill} item xs={6} s={"auto"} md={6} lg={4} xl={"auto"}>
              <Container>
                <div
                  style={{
                    padding: "0px 8px",
                    color: "#F2453D",
                    borderRadius: 12,
                    border: "1px solid gray",
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
