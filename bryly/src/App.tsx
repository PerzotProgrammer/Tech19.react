import './App.css'
import {solids} from "./SampleData.ts";
import SolidInfo from "./SolidInfo.tsx";

export default function App() {

    return (
        <>
            <h1>Bryły</h1>
            <table>
                <thead>
                <tr>
                    <th>Bryła</th>
                    <th>Ilustracja</th>
                    <th>Wzory</th>
                    <th>Przykład</th>
                </tr>
                </thead>
                <tbody>
                {solids.map(solid => {
                    return (<SolidInfo solid={solid}/>)
                })}
                </tbody>
            </table>
        </>
    )
}

