import { create } from 'zustand';
import { UseSidebarSize } from './types';
import { persist } from 'zustand/middleware';

export const useSidebarSize = create<UseSidebarSize>()(
  persist(
    set => ({
      size: 15,
      onResize: newSize => set({ size: newSize }),
    }),
    {
      name: 'sidebar-size',
    },
  ),
);
