import { instance } from './instance';
import { ROUTES } from './routes';
import { ProductsResponse } from './types';

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
    console.error(error);
  }
};
