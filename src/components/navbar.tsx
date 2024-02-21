import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { FC } from 'react';
import { Typography } from '@mui/material';
import theme from 'theme';
import { SearchInput } from './search-input';

export const Navbar: FC = () => {
  return (
    <AppBar position="static" sx={{ padding: 2, background: theme.palette.success.light }}>
      <Box
        width="100%"
        display="flex"
        marginX="auto"
        flexDirection="row"
        justifyContent="space-between"
        maxWidth={theme.breakpoints.values.desktop}
      >
        <Typography variant="h4" display="flex" flexDirection="row">
          <Box component="span" fontWeight="bold">
            Codibly
          </Box>
          <Box component="span" display={{ xs: 'none', md: 'block' }}>
            {' - '}
            recruitment task
          </Box>
        </Typography>
        <SearchInput />
      </Box>
    </AppBar>
  );
};
