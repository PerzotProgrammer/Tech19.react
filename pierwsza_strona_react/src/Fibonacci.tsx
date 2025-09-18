import "./Fibonacci.css";
import fibonacci from "./assets/Fibonacci.jpg";
import {useState} from "react";

export default function Fibonacci() {

    const [fibN, setFibN] = useState(0);
    const [fibElements, setFibElements] = useState(Array<number>)
    return (
        <div className="fibPanel">
            <h1>Obliczanie iloczynu n elementów ciągu Fibonacciego</h1>
            <img src={fibonacci} alt="Fibonacci"/>
            <h2>Podaj n-ty element ciągu:</h2>
            <input type="number" onChange={e => setFibN(parseInt(e.target.value))} min="1"/>
            <br/>
            <input type="button" onClick={() => setFibElements(calculateFibs(fibN))} value="Oblicz"/>
            <br/>
            <p>Elementy ciągu: {fibElements.join(" * ")}</p>
            <p>Iloczyn tych elementów to: {multiplyArrayItems(fibElements)}</p>
        </div>
    );
}


function calculateFibs(n: number): number[] {
    if (n < 1) return [];
    let currentFib = 1;
    let previousFib = 0;
    const fibs: number[] = [1];

    for (let i = 1; i < n; i++) {
        const temp = currentFib;
        currentFib += previousFib;
        previousFib = temp;
        fibs.push(currentFib)
    }

    return fibs
}

function multiplyArrayItems(arr: number[]): number {
    let product = 1;
    arr.forEach(num => {
            product *= num
        }
    )
    return product
}