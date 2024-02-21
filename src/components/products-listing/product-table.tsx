import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, alpha } from '@mui/material';
import { ProductModal } from 'components/product-modal';
import { FC, useState } from 'react';
import { useProductsStore } from 'store/use-products-store';

export const ProductsTable: FC = () => {
  const [pickedProduct, setPickedProduct] = useState<number>();
  const [isModal, setIsModal] = useState(false);
  const products = useProductsStore((state) => state.products);

  return (
    <Box marginTop={6} mx={{ xs: 1, xl: 0 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: 'grey.100' }}>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(({ id, color, name, year }) => (
              <TableRow
                key={id}
                sx={{
                  cursor: 'pointer',
                  backgroundColor: color,
                  '&:hover': {
                    backgroundColor: alpha(color, 0.8),
                  },
                }}
                onClick={() => {
                  setPickedProduct(id);
                  setIsModal(true);
                }}
              >
                <TableCell>{id}</TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ProductModal
        open={isModal}
        handleClose={() => {
          setIsModal(false);
          setPickedProduct(undefined);
        }}
        productId={pickedProduct}
      />
    </Box>
  );
};
