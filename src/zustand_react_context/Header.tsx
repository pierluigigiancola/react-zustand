import { useAppContext } from "./AppContext";


export default function Header() {
    const title = useAppContext((state) => state.title)
    const logo = useAppContext((state) => state.logo)
    const info = useAppContext((state) => state.info)

    return (
        <div style={{background: "gray"}}>
            <span>{title}</span>
            <span>{logo}</span>
            <span>{info}</span>
        </div>
    )
}