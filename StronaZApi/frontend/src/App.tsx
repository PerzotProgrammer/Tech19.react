import {useState} from 'react'
import './App.css'
import type {ApiResponse} from "./ApiResponse.tsx";
import TriangleCard from "./TriangleCard.tsx";


export default function App() {

    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    function loadData(a: number, b: number, c: number) {

        const request = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({a: a, b: b, c: c}),
        }

        setIsLoading(true);

        setTimeout(async () => {
            await fetch("http://localhost:8080/triangle/", request)
                .then(res => res.json())
                .then(data => setApiResponse(data))
                .catch(err => console.log(err));

            setIsLoading(false);
        }, 500) // Opóźnienie w ładowaniu
    }

    return (
        <div id={"App"}>
            <label>
                A:&nbsp;
                <input type="number" value={a} onChange={(e) =>
                    setA(Number.parseInt(e.target.value))}/>
            </label>
            <br/>
            <label>
                B:&nbsp;
                <input type="number" value={b} onChange={(e) =>
                    setB(Number.parseInt(e.target.value))}/>
            </label>
            <br/>
            <label>
                C:&nbsp;
                <input type="number" value={c} onChange={(e) =>
                    setC(Number.parseInt(e.target.value))}/>
            </label>
            <br/>
            <input type="button" value={"Sprawdź dane"} onClick={() =>
                loadData(a, b, c)
            }/>

            <br/>

            {isLoading ? <p>ŁADOWANIE...</p> : apiResponse ?
                <TriangleCard data={apiResponse}/> : ""}

        </div>
    )
}




