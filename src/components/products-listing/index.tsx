import { getProducts } from 'api/services';
import { Pagination } from './pagination';
import { useParams } from 'hooks/use-params';
import { Box, Typography } from '@mui/material';
import { ProductsTable } from './product-table';
import { useMetaStore } from 'store/use-meta-store';
import { useProductsStore } from 'store/use-products-store';
import { FC, useCallback, useEffect, useState } from 'react';

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
      setError(undefined);
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

  if (loading) {
    return (
      <Typography textAlign="center" marginTop={6} mx={{ xs: 1, xl: 0 }}>
        Loading...
      </Typography>
    );
  }

  return (
    <Box marginTop={6} mx={{ xs: 1, xl: 0 }}>
      <ProductsTable />
      <Pagination />
    </Box>
  );
};
