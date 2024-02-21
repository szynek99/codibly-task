import { Pagination as PaginationType } from 'api/types';
import { create } from 'zustand';

interface MetaState {
  meta: PaginationType;
  setMeta: (meta: PaginationType) => void;
}

export const useMetaStore = create<MetaState>()((set) => ({
  meta: {} as PaginationType,
  setMeta: (_p) => set(() => ({ meta: _p })),
}));
