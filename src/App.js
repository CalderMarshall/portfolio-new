import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal';
import ImagesGrid from './components/ImagesGrid';
import Link from '@material-ui/core/Link';
import pdf from './static/docs/CalderMarshallResume.pdf';
import ATL from './static/images/atlanta-united-fc.svg';
import OUT from './static/images/outkast.png';
import SEAL from './static/images/seal.png';
import BRAVES from './static/images/braves.png';

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
            <AppBar position="relative">
              <Toolbar style={{ margin: 0, padding: 0, marginLeft: 5 }}>
                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ margin: '0px 5px' }}
                >
                  Calder Marshall
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    minWidth: 190,
                    alignItems: 'center',
                  }}
                >
                  <CodeIcon />
                  <ComputerIcon />
                  <BuildIcon className="wrench" />
                  <DirectionsBikeIcon style={{ marginBottom: 5 }} />
                  <MotorcycleIcon />
                </div>
              </Toolbar>
            </AppBar>
          </div>
          <div className="title">
            <Container>
              <Typography variant="h5" align="center" color="textPrimary">
                It's Calder, but on the Web!
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary">
                Javascript developer native to Atlanta, GA
              </Typography>
            </Container>
          </div>
          <div className="box">
            <div className="column">
              <div>
                <Container style={{ padding: '0 10px' }} maxWidth={false}>
                  <div
                    style={{
                      backgroundColor: '#ededed',
                      borderRadius: 10,
                      padding: 15,
                    }}
                  >
                    <Typography variant="h6" paragraph align="left">
                      About Me
                    </Typography>
                    <Typography paragraph variant="subtitle1">
                      Hey, I'm Calder, a User Interface Engineer for{' '}
                      <Link target="none" href="https://about.sharecare.com/">
                        Sharecare
                      </Link>{' '}
                      in Atlanta.
                    </Typography>
                    <Typography paragraph>
                      I spend most of my time at Sharecare building functional
                      React components for our web platform. You can view the
                      web platform after creating an{' '}
                      <Link target="none" href="https://you.sharecare.com/">
                        account
                      </Link>
                      . My work demands using modern features of Javascript and
                      the Ecmascript syntax.
                    </Typography>
                    <Typography paragraph>
                      I also spend a fair amount of time unit testing these
                      components to ensure they will work properly. In addition,
                      towards the end of 2019, I played a large part in updating
                      certain sections of the Sharecare Web Application to meet{' '}
                      <Link
                        target="none"
                        href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                      >
                        accesibility standards
                      </Link>
                      .
                    </Typography>
                    <Typography paragraph>
                      Begrudgingly, this also includes making these views
                      compliant in older, less modern browsers. My work at
                      Sharecare also includes working with NodeJS servers when
                      necessary.
                    </Typography>
                    <Typography paragraph>
                      My programming career started at{' '}
                      <Link target="none" href="https://www.digitalcrafts.com/">
                        Digital Crafts
                      </Link>{' '}
                      in Buckhead, February of 2017.
                    </Typography>
                    <Typography paragraph>
                      Want to learn more about my qualifications and experience?
                      Take a look at my{' '}
                      <Link target="none" href={pdf}>
                        resume
                      </Link>
                      .
                    </Typography>
                    <Typography paragraph>
                      I am truly a problem solver at heart, which lends aptitude
                      towards my skills as a developer. Outside of work, I spend
                      a large amount of time maintaining, repairing, and
                      modifying, my car, motorcyle, and mountain bikes.
                    </Typography>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#ededed',
                      borderRadius: 10,
                      padding: 15,
                      margin: '20px 0px',
                    }}
                  >
                    <img
                      style={{ margin: '0px 5px' }}
                      src={SEAL}
                      alt="City Of Atlanta Seal"
                      height="50"
                      width="50"
                    />
                    <img
                      style={{ margin: '0px 5px' }}
                      src={ATL}
                      alt="Atlanta United"
                      height="50"
                      width="50"
                    />
                    <img
                      style={{ margin: '0px 5px' }}
                      src={OUT}
                      alt="Outkast"
                      height="50"
                      width="74"
                    />
                    <img
                      style={{ margin: '0px 5px' }}
                      src={BRAVES}
                      alt="Atlanta Braves"
                      height="50"
                      width="50"
                    />

                    <Typography style={{ padding: '10px 0px' }} variant="h6">
                      Atlanta, GA
                    </Typography>
                    <Typography paragraph>
                      I was born and raised here. I love the outdoors, but this
                      city has my heart.
                    </Typography>
                  </div>
                </Container>
              </div>
            </div>
            <div className="column">
              <>
                <ImagesGrid />
              </>
            </div>
          </div>
          <div className="foot">
            <Container>
              <Typography
                style={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                Made with{' '}
                <FavoriteIcon
                  color="error"
                  style={{ margin: '-2px 5px' }}
                />
                in Smyrna, GA.
              </Typography>
            </Container>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
