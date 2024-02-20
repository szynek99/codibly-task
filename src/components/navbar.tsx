import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { FC } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import theme from 'theme';
import { SearchInput } from './search-input';

export const Navbar: FC = () => {
  const showFullText = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar position="static" sx={{ padding: 2, background: theme.palette.success.light }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between' }}
        maxWidth={theme.breakpoints.values.desktop}
        width="100%"
        marginX="auto"
      >
        <Typography variant="h4">
          <Box component="span" fontWeight="bold">
            Codibly
          </Box>
          {showFullText && (
            <>
              {' - '}
              recruitment task
            </>
          )}
        </Typography>
        <SearchInput />
      </Box>
    </AppBar>
  );
};
