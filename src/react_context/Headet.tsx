import { useAppContext } from "./AppContext";


export default function Header() {
    const {title, logo, info} = useAppContext()

    return (
        <div style={{background: "gray"}}>
            <span>{title}</span>
            <span>{logo}</span>
            <span>{info}</span>
        </div>
    )
}