import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, colors } from '@mui/material';
import { FC } from 'react';
import { useProductsStore } from 'store/use-products-store';

export const ProductsTable: FC = () => {
  const products = useProductsStore((state) => state.products);

  return (
    <Box marginTop={6} mx={{ xs: 1, xl: 0 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: colors.grey[100] }}>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} sx={{ backgroundColor: product.color }}>
                <TableCell>{product.id}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
