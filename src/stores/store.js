import create from 'zustand';

export const useUserInfoStore = create((set) => ({
     userInfo: {
          name: '',
     },
     setUserInfo: (name) =>
          set({ userInfo: { name } }),
}));

export const useArrayStore = create((set) => ({
     items: [],
     addArrayItems: (newItems) => set({ items: newItems }),
     addItem: (item) => set((state) => ({
          items:
               [
                    ...state.items,
                    item
               ]
     })),
     removeItem: (index) =>
          set((state) => ({ items: state.items.filter((_, i) => i !== index) })),
}));