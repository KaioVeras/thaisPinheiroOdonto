import { create } from 'zustand';

export const useMenuStore = create((set) => ({
    isOpenMenu: false,
    toggleMenu: () => set((state) => ({ isOpenMenu: !state.isOpenMenu }))
}));

