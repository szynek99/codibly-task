import React from 'react';
import theme from 'theme';
import { Box } from '@mui/material';
import { Navbar } from 'components/navbar';
import { ProductsListing } from 'components/products-listing';

function App() {
  return (
    <div>
      <Navbar />
      <Box component="main" maxWidth={theme.breakpoints.values.desktop} margin="auto">
        <ProductsListing />
      </Box>
    </div>
  );
}

export default App;
