import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import ImagesGrid from './components/ImagesGrid';
import AboutContainer from './components/AboutContainer';
import TopBar from './components/TopBar';
import TitleContainer from './components/TitleContainer';
import Footer from './components/Footer';

const theme = createMuiTheme({
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
            </div>
            <div className="column">
              <ImagesGrid />
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
