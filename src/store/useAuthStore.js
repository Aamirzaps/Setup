import { create } from "zustand"

export const useAuthStore = create((set) => ({
  user: null,

  setUser: (user) => {
    if (!user) {
      console.warn("Invalid user data")
      return
    }

    set({ user })
  },

  logout: () => set({ user: null }),
}))