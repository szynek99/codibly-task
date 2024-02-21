import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from 'components/navbar';
import { Toaster } from 'react-hot-toast';
import { ProductsListing } from 'components/products-listing';

function App() {
  return (
    <div>
      <Navbar />
      <Box component="main" maxWidth="desktop" margin="auto">
        <ProductsListing />
      </Box>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
