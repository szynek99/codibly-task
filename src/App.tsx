import theme from 'theme';
import { Box } from '@mui/material';
import React from 'react';
import { Navbar } from 'components/navbar';
import { Listing } from 'components/listing';

function App() {
  return (
    <div>
      <Navbar />
      <Box component="main" maxWidth={theme.breakpoints.values.desktop} margin="auto">
        <Listing />
      </Box>
    </div>
  );
}

export default App;
