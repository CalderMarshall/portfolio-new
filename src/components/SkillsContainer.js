import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function SkillsContainer() {
  const skillsList = [
    "Javascript",
    "Java",
    "ReactJS",
    "Python",
    "Node.js",
    "Spring",
    "Bootstrap",
    "CSS",
    "Sass",
    "HTML",
    "Wordpress",
    "jQuery",
    "Redux",
    "React Native",
    "Expo",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Google Cloud",
    "AWS",
    "Jenkins",
    "Enzyme",
    "Jest",
  ];
  return (
    <Container style={{ marginTop: 20, padding: "0 5px" }}>
      <div
        style={{
          backgroundColor: "#ededed",
          borderRadius: 10,
          padding: 15,
        }}
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
          Competencies
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
