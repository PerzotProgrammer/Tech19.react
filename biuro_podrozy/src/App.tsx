import './App.css'
import {useState} from "react";
import CitySelectForm from "./forms/CitySelectForm.tsx";
import {destinationList} from "./data/DestinationList.tsx";
import NumberForm from "./forms/NumberForm.tsx";
import CheckboxForm from "./forms/CheckboxForm.tsx";
import RadioSelectForm from "./forms/RadioSelectForm.tsx";
import TextareaForm from "./forms/TextareaForm.tsx";
import EmailForm from "./forms/EmailForm.tsx";

export default function App() {

    const [currentCity, setCurrentCity] = useState(destinationList[0]);
    const [personCount, setPersonCount] = useState(1);
    const [ownTransport, setOwnTransport] = useState(false);
    const [feedingType, setFeedingType] = useState("własne");
    const [notice, setNotice] = useState("");
    const [email, setEmail] = useState("");

    const [emailCorrect, setEmailCorrect] = useState(true);

    return <div className={"App"}>
        <h1>Zapraszamy na wycieczkę twoich marzeń!</h1>
        <img src={currentCity.image} alt={currentCity.name}/>
        <br/>
        <div className={"FlexWrap"}>
            <div className={"Section"}>
                <h2>Proszę podać dane</h2>
                <br/>
                <CitySelectForm
                    label={"Miasto"}
                    initialValue={currentCity}
                    onChange={city => setCurrentCity(city)}/>
                <br/>
                <NumberForm
                    label={"Liczba osób"}
                    initialValue={personCount}
                    onChange={count => setPersonCount(count)}/>
                <br/>
                <CheckboxForm
                    label={"Czy dojazd we własnym zakresie?"}
                    initialValue={ownTransport}
                    onChange={isChecked => setOwnTransport(isChecked)}/>
                <br/>
                <RadioSelectForm
                    group={"wyzywienie"}
                    optionList={["własne", "śniadania", "pełne"]}
                    label={"Sposób wyżywienia"}
                    initialValue={feedingType}
                    onChange={value => setFeedingType(value)}/>
                <br/>
                <TextareaForm
                    label={"Uwagi dla organizatora"}
                    initialValue={notice}
                    onChange={value => setNotice(value)}/>
                <br/>
                <EmailForm
                    label={"Adres email do kontaktu"}
                    initialValue={email}
                    onChange={value => {
                        setEmailCorrect(true)
                        setEmail(value)
                    }}/>
                <br/>
                <input type={"button"}
                       value={"Wyślij formularz"}
                       onClick={() => {
                           const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                           const isEmailCorrect = regex.test(email);
                           setEmailCorrect(isEmailCorrect)
                           if (isEmailCorrect)
                               alert("Twoje zgłoszenie zostało wysłane!")
                       }}
                />
            </div>
            <div className={"Section"}>
                <h2>Sprawdź poprawność danych</h2>
                {emailCorrect ? "" : <h3 className={"ErrorText"}>Adres email jest niepoprawny!!!</h3>}
                <ul>
                    <li>Miasto: {currentCity.name == destinationList[0].name ? "Proszę wybrać miasto!" : currentCity.name}</li>
                    <li>Ilość osób: {personCount}</li>
                    <li>Czy własny dojazd: {ownTransport ? "TAK" : "NIE"}</li>
                    <li>Sposób wyżywienia: {feedingType}</li>
                    <li>Uwagi: {notice == "" ? "Brak uwag" : notice}</li>
                    <li>Adres email: {email == "" ? "Proszę uzupełnić!" : email}</li>
                </ul>
            </div>
        </div>
    </div>
}

