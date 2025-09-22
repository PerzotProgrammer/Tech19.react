import {persons} from "./SampleData.ts";
import "./App.css";
import PersonInfo from "./PersonInfo.tsx";


export default function App() {

    return (
        <div className="content">
            <table>
                <tbody>
                <tr>
                    <th>Imię i nazwisko</th>
                    <th>Wiek</th>
                    <th>Wzrost</th>
                    <th>Płeć</th>
                    <th>Czy pełnoletni?</th>
                </tr>
                </tbody>
                {persons.map(person => {
                    return (<PersonInfo person={person}></PersonInfo>)
                })}
            </table>
        </div>
    );
}
