import { useState } from "react"
import { useContext, createContext } from  'react'
import { AppProps, AppState } from "./Store"


export const AppContext = createContext<AppState>({
  title: 'Bear Store',
  logo: '🐻',
  info: 'Bear store info',
  setTitle() {},
  setLogo() {},
  setInfo() {}
})

type AppProviderProps = React.PropsWithChildren<Partial<AppProps>>

export const useDefaultAppContext = () => {
  const [title, setTitle] = useState<React.ReactNode>('Bear Store')
  const [logo, setLogo] = useState<React.ReactNode>('🐻')
  const [info, setInfo] = useState<React.ReactNode>('Bear store info')
  return { title, setTitle, logo, setLogo, info, setInfo }
}

export function AppProvider({ children }: AppProviderProps) {
  // const storeRef = useRef<AppStore>()
  // if (!storeRef.current) {
  //   storeRef.current = createAppStore(props)
  // }
  
  return (
    <AppContext.Provider value={useDefaultAppContext()}>
      {children}
    </AppContext.Provider>
  )
}


export function useAppContext() {
  return useContext(AppContext)
}
