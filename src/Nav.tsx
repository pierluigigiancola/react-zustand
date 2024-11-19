
export default function Nav() {
    return (
        <nav style={{ position:"fixed", top: '1rem', left: "1rem", display: "flex", gap: "1rem"}}>
            <a href="/">Home</a>
            <a href="/zustand_react_context">Zustand React Context</a>
            <a href="/react_context">React Context Only</a>
        </nav>
    )
}

