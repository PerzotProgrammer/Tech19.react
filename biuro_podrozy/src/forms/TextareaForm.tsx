import type {FormParams} from "./FormParams.tsx";
import {useState} from "react";

export default function TextareaForm(params: FormParams<string>) {

    const [currentValue, setCurrentValue] = useState(params.initialValue);

    return <div>
        <label>
            {params.label}
            <br/>
            <textarea
                value={currentValue}
                onChange={(e) => {
                    setCurrentValue(e.target.value);
                    params.onChange(e.target.value);
                }
                }/>
        </label>
    </div>;

}