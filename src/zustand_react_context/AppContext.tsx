import { useRef } from "react"
import { useContext, createContext } from  'react'
import { useStore } from "zustand"
import { AppProps, AppState, AppStore, createAppStore } from "./Store"

export const AppContext = createContext<AppStore | null>(null)

type AppProviderProps = React.PropsWithChildren<Partial<AppProps>>

export function AppProvider({ children, ...props }: AppProviderProps) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = createAppStore(props)
  }
  
  return (
    <AppContext.Provider value={storeRef.current}>
      {children}
    </AppContext.Provider>
  )
}


export function useAppContext<T>(selector: (state: AppState) => T): T {
  const store = useContext(AppContext)
  if (!store) throw new Error('Missing AppContext.Provider in the tree')
  return useStore(store, selector)
}
