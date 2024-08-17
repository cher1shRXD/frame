import { create } from "zustand";

export interface PhotoStore {
  photos: string[];
  addPhoto: (photo: string) => void;
  clear: () => void;
}

export const photoStore = create<PhotoStore>((set) => ({
  photos: [],
  addPhoto: (photo) => set((state) => ({ photos: [...state.photos, photo] })),
  clear: () => set({ photos: [] }),
}));
