import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  email: string | null
  isLoggedIn: boolean
  isLoading: boolean
  setEmail: (email: string) => void
  setLoading: (loading: boolean) => void
  login: (email: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: null,
      isLoggedIn: false,
      isLoading: false,
      setEmail: (email) => set({ email }),
      setLoading: (isLoading) => set({ isLoading }),
      login: (email) => set({ email, isLoggedIn: true, isLoading: false }),
      logout: () => set({ email: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
)
