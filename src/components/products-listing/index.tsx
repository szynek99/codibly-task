import { Box, Typography } from '@mui/material';
import { getProducts } from 'api/services';
import { FC, useCallback, useEffect, useState } from 'react';
import { ProductsTable } from './product-table';
import { Pagination } from './pagination';
import { useParams } from 'hooks/use-params';
import { useProductsStore } from 'store/use-products-store';
import { useMetaStore } from 'store/use-meta-store';

export const ProductsListing: FC = () => {
  const { getParams } = useParams();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);
  const setMeta = useMetaStore((state) => state.setMeta);
  const setProducts = useProductsStore((state) => state.setProducts);

  const handleFetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getProducts(getParams());
      if (!result) {
        return;
      }
      setError('');
      setProducts(result.data);
      setMeta(result.meta);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [getParams, setMeta, setProducts]);

  useEffect(() => {
    const getData = setTimeout(() => {
      handleFetchProducts();
    }, 150);

    return () => clearTimeout(getData);
  }, [handleFetchProducts]);

  if (error) {
    return (
      <Typography marginTop={6} mx={{ xs: 1, xl: 0 }} textAlign="center">
        {error}
      </Typography>
    );
  }

  return (
    <Box marginTop={6} mx={{ xs: 1, xl: 0 }}>
      {loading ? (
        <Typography textAlign="center">Loading...</Typography>
      ) : (
        <>
          <ProductsTable />
          <Pagination />
        </>
      )}
    </Box>
  );
};
