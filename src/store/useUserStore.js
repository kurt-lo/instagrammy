import { create } from "zustand";

const useUserStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user-info-ig-clone')),
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => ({ user }),
}))

export default useUserStore