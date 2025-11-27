import Header from "./Header.tsx";
import InfoSection from "./InfoSection.tsx";
import CalculationSection from "./CalculationSection.tsx";
import Footer from "./Footer.tsx";
import "./App.css"

export default function App() {

    return (
        <div className={"App"}>
            <Header/>
            <InfoSection/>
            <CalculationSection/>
            <Footer/>
        </div>
    )
}

