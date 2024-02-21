import { Product } from 'api/types';
import { create } from 'zustand';

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductsStore = create<ProductState>()((set) => ({
  products: [],
  setProducts: (_p) => set(() => ({ products: _p })),
}));
