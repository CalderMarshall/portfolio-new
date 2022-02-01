import React from "react";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { teal, red } from "@mui/material/colors";
import ImagesGrid from "./components/ImagesGrid";
import AboutContainer from "./components/AboutContainer";
import TopBar from "./components/TopBar";
import TitleContainer from "./components/TitleContainer";
import Footer from "./components/Footer";
import SkillsContainer from "./components/SkillsContainer";
import InformationContainer from "./components/InformationContainer";
import StravaContainer from "./components/StravaContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: teal[200],
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 400,
      fontSize: 16,
    },
    h6: {
      fontSize: '1em'
    },
    h5: {
      fontSize: '1.25em'
    }
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <div className="top">
            <TopBar />
          </div>
          <div className="title">
            <TitleContainer />
          </div>
          <div className="box">
            <div className="column">
              <AboutContainer />
              <InformationContainer />
            </div>
            <div className="column">
              <ImagesGrid />
              <SkillsContainer />
              <StravaContainer/>
            </div>
          </div>
          <div className="foot">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
