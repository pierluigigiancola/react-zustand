import { useAppContext } from "./AppContext"
import { useShallow } from 'zustand/react/shallow'
import { AppState } from "./Store"


export const ConsumerTitle = () => {
    const title = useAppContext((state) => state.title)
    const setTitle = useAppContext((state) => state.setTitle)
    return (
        <>
        <h1>{title}</h1>

        <input value={title ? title.toString() : ''} onChange={(e) => setTitle(e.target.value)} />
        </>
    )
}


export const ConsumerLogo = () => {
    const logo = useAppContext((state) => state.logo)
    const setLogo = useAppContext((state) => state.setLogo)
    return (
        <>
        <h1>{logo}</h1>

        <input value={logo ? logo.toString() : ''} onChange={(e) => setLogo(e.target.value)} />
        </>
    )
}


export const ConsumerInfo = () => {
    const info = useAppContext((state) => state.info)
    const setInfo = useAppContext((state) => state.setInfo)
    return (
        <>
        <h1>{info}</h1>

        <input value={info ? info.toString() : ''} onChange={(e) => setInfo(e.target.value)} />
        </>
    )
}
