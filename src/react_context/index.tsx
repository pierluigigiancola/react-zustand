import Nav from "../Nav";
import { AppProvider } from "./AppContext";
import { ConsumerInfo, ConsumerLogo, ConsumerTitle } from "./Consumer";
import Header from "./Headet";




export default function App() {
    return (
      <AppProvider>
        <Nav />
        <Header />
        <ConsumerTitle />
        <ConsumerLogo />
        <ConsumerInfo />
      </AppProvider>
    );
}