export const createAuthSlice = (set) => ({
    user: JSON.parse(localStorage.getItem('user-info-ig-clone')),
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => ({ user }),
})