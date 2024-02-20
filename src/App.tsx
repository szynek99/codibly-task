import { Box, Typography } from '@mui/material';
import { Navbar } from 'components/navbar';
import React from 'react';
import theme from 'theme';

function App() {
  return (
    <div>
      <Navbar />
      <Box component="main" maxWidth={theme.breakpoints.values.desktop} margin="auto">
        <Typography>home</Typography>
      </Box>
    </div>
  );
}

export default App;
