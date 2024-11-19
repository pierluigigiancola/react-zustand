import { createStore, } from 'zustand'



export interface AppProps {
  title: React.ReactNode,
  logo: React.ReactNode,
  info: React.ReactNode,
}

export interface AppState extends AppProps {
  setTitle: (title: React.ReactNode) => void,
  setLogo: (logo: React.ReactNode) => void,
  setInfo: (info: React.ReactNode) => void,
}

export type AppStore = ReturnType<typeof createAppStore>

export const createAppStore = (initProps?: Partial<AppState>) => {
  const DEFAULT_PROPS: AppProps = {
    title: 'Bear Store',
    logo: '🐻',
    info: 'Bear store info',
  }
  return createStore<AppState>()((set) => ({
    ...DEFAULT_PROPS,
    setTitle: (title) => set({ title }),
    setLogo: (logo) => set({ logo }),
    setInfo: (info) => set({ info }),
    ...initProps,
  }))
}

