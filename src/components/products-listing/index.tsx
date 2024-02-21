import { Box } from '@mui/material';
import { getProducts } from 'api/services';

import { FC, useEffect, useState } from 'react';
import { ProductsTable } from './product-table';
import { Pagination } from './pagination';
import { useParams } from 'hooks/use-params';
import { useProductsStore } from 'store/use-products-store';
import { useMetaStore } from 'store/use-meta-store';

export const ProductsListing: FC = () => {
  const { getParams } = useParams();
  const [loading, setLoading] = useState(true);
  const setMeta = useMetaStore((state) => state.setMeta);
  const setProducts = useProductsStore((state) => state.setProducts);

  useEffect(() => {
    setLoading(true);
    getProducts(getParams())
      .then((result) => {
        if (!result) {
          console.error('No result');
          return;
        }
        setProducts(result.data);
        setMeta(result.meta);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [setLoading, setProducts, getParams, setMeta]);

  return (
    <Box marginTop={6} mx={{ xs: 1, xl: 0 }}>
      {loading ? (
        <Box>Loading...</Box>
      ) : (
        <>
          <ProductsTable />
          <Pagination />
        </>
      )}
    </Box>
  );
};
