import { useAppContext } from "./AppContext"


export const ConsumerTitle = () => {
    const {title, setTitle} = useAppContext()
    return (
        <>
        <h1>{title}</h1>

        <input value={title ? title.toString() : ''} onChange={(e) => setTitle(e.target.value)} />
        </>
    )
}


export const ConsumerLogo = () => {
    const {
        logo,
        setLogo
    } = useAppContext()
    return (
        <>
        <h1>{logo}</h1>

        <input value={logo ? logo.toString() : ''} onChange={(e) => setLogo(e.target.value)} />
        </>
    )
}


export const ConsumerInfo = () => {
    const {
        info,
        setInfo
    } = useAppContext()
    return (
        <>
        <h1>{info}</h1>

        <input value={info ? info.toString() : ''} onChange={(e) => setInfo(e.target.value)} />
        </>
    )
}
