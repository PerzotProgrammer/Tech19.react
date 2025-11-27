import {useState} from "react";
import ErrorMessage from "./ErrorMessage.tsx";
import Dgt0Alt0 from "./assets/Dgt0Alt0.png";
import Dgt0Agt0 from "./assets/Dgt0Agt0.png";
import Deq0Alt0 from "./assets/Deq0Alt0.png";
import Deq0Agt0 from "./assets/Deq0Agt0.png";
import Dlt0Alt0 from "./assets/Dlt0Alt0.png";
import Dlt0Agt0 from "./assets/Dlt0Agt0.png";
import ErrorImg from "./assets/Error.png";

export default function CalculationSection() {

    const [aStr, setAStr] = useState("0.0")
    const [bStr, setBStr] = useState("0.0")
    const [cStr, setCStr] = useState("0.0")

    const [a, setA] = useState(0.0)
    const [b, setB] = useState(0.0)
    const [c, setC] = useState(0.0)

    const [delta, setDelta] = useState(0.0)

    const [x1Str, setX1Str] = useState("0")
    const [x2Str, setX2Str] = useState("0")

    const [hasError, setHasError] = useState(false)

    const [img, setImg] = useState(Deq0Alt0);

    function handleBlur() {
        if (!isNaN(Number(aStr)) && !isNaN(Number(bStr)) && !isNaN(Number(cStr)) && Number(aStr) != 0) {
            const aTemp = Number.parseFloat(aStr)
            const bTemp = Number.parseFloat(bStr)
            const cTemp = Number.parseFloat(cStr)
            const deltaTemp = (bTemp * bTemp) - (4 * aTemp * cTemp)
            setA(aTemp)
            setB(bTemp)
            setC(cTemp)
            setDelta(deltaTemp)

            if (deltaTemp > 0) {
                const x1Temp = (-bTemp + Math.sqrt(deltaTemp)) / (2 * aTemp)
                const x2Temp = (-bTemp - Math.sqrt(deltaTemp)) / (2 * aTemp)
                setX1Str(x1Temp.toString())
                setX2Str(x2Temp.toString())

                if (aTemp > 0) setImg(Dgt0Agt0)
                else setImg(Dgt0Alt0)

            } else if (deltaTemp == 0) {
                const x1Temp = -bTemp / (2 * aTemp)
                setX1Str(x1Temp.toString())
                setX2Str(x1Temp.toString())


                if (aTemp > 0) setImg(Deq0Agt0)
                else setImg(Deq0Alt0)
            } else if (deltaTemp < 0) {
                setX1Str("nie istnieje")
                setX2Str("nie istnieje")

                if (aTemp > 0) setImg(Dlt0Agt0)
                else setImg(Dlt0Alt0)
            }

            setHasError(false)
        } else {
            setHasError(true)
            setImg(ErrorImg)
        }
    }

    return (
        <div className={"CalculationSection"}>
            <div className={"CalcFlex"}>
                <div className={"Calculations"}>
                    <h3 className={"SectionTitle"}>Przykładowe obliczenia</h3>
                    <label>a&emsp;=&emsp;
                        <input type="text"
                               value={aStr}
                               onChange={e => {
                                   setAStr(e.target.value.replace(",", "."))
                               }}
                               onBlur={handleBlur}
                        />
                    </label>
                    <br/>
                    <label>b&emsp;=&emsp;
                        <input type="text"
                               value={bStr}
                               onChange={e => {
                                   setBStr(e.target.value.replace(",", "."))
                               }}
                               onBlur={handleBlur}
                        />
                    </label>
                    <br/>
                    <label>c&emsp;=&emsp;
                        <input type="text"
                               value={cStr}
                               onChange={e => {
                                   setCStr(e.target.value.replace(",", "."))
                               }}
                               onBlur={handleBlur}
                        />
                    </label>
                </div>
                <div className={"FunctionGraph"}>
                    <h3 className={"SectionTitle"}>Interpretacja graficzna</h3>
                    <div className={"ImageWrapper"}>
                        <img src={img} alt={img}/>
                    </div>
                </div>
            </div>
            <div>
                <ErrorMessage hasError={hasError}/>
                <p className={"InfoMath"}>Równanie o postaci: {a}x<sup>2</sup> + {b}x + {c} = 0</p>
                <p className={"InfoMath"}>&#916; = {delta}</p>
                <p className={"InfoMath"}>x<sub>1</sub> = {x1Str}</p>
                <p className={"InfoMath"}>x<sub>2</sub> = {x2Str}</p>
            </div>
        </div>
    )
}