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

