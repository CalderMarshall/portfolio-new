import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function TopBar() {
  return (
    <AppBar position="relative">
      <Toolbar style={{ margin: 0, padding: 0, marginLeft: 5 }}>
        <Typography variant="h6" color="inherit" style={{ margin: '0px 5px' }}>
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
  );
}
