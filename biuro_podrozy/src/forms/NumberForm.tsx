import {useState} from "react";
import type {FormParams} from "./FormParams.tsx";


export default function NumberForm(params: FormParams<number>) {

    const [currentNumber, setCurrentNumber] = useState(params.initialValue);

    return <div>
        <label>
            {params.label}:
            <input
                type={"number"}
                value={currentNumber}
                min={1}
                onChange={(e) => {
                    const parsed = Number.parseInt(e.target.value);
                    params.onChange(parsed)
                    setCurrentNumber(parsed)
                }
                }/>
        </label>
    </div>;

}