import { isAxiosError } from 'axios';
import { instance } from './instance';
import { ROUTES } from './routes';
import { Product, ProductsResponse } from './types';

export const getProducts = async (searchParams: Record<string, string>) => {
  try {
    const searchQuery = new URLSearchParams(searchParams).toString();
    const response = await instance.get<ProductsResponse>(`${ROUTES.products}?${searchQuery}`);
    const { data, per_page, page, total, total_pages } = response.data;

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
