import { isAxiosError } from 'axios';
import isArray from 'lodash-es/isArray';
import { ROUTES } from './routes';
import { instance } from './instance';
import { Product, ProductsResponse } from './types';

export const getProducts = async (searchParams: Record<string, string>) => {
  try {
    const searchQuery = new URLSearchParams(searchParams).toString();

    const response = await instance.get<ProductsResponse | { data: Product }>(`${ROUTES.products}?${searchQuery}`);

    const responseData = response.data;

    /// README - Odd API  behaviour walkaround
    if (!isArray(responseData.data)) {
      const per_page = Number(searchParams['per_page']);

      const singleProduct = responseData.data;
      return {
        data: [singleProduct],
        meta: {
          per_page,
          page: 1,
          total: 1,
          total_pages: 1,
        },
      };
    }
    /// README - Odd API  behaviour walkaround

    const { data, per_page, page, total, total_pages } = responseData as ProductsResponse;

    return {
      data,
      meta: {
        per_page,
        page,
        total,
        total_pages,
      },
    };
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('no products found');
      }
      if (error.response?.status?.toString().startsWith('4')) {
        throw new Error('client error try again');
      }
      if (error.response?.status?.toString().startsWith('5')) {
        throw new Error('server error try again later');
      }
    }
    throw new Error('error fetching products');
  }
};

export const getProduct = async (id: number) => {
  try {
    const response = await instance.get<{ data: Product }>(`${ROUTES.products}/${id}`);

    return response.data.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status?.toString().startsWith('5')) {
      throw new Error('server error try again later');
    }
    throw new Error('error fetching product');
  }
};
