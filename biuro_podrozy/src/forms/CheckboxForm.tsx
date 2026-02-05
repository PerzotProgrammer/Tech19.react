import type {FormParams} from "./FormParams.tsx";
import {useState} from "react";

export default function CheckboxForm(params: FormParams<boolean>) {
    const [isChecked, setIsChecked] = useState(params.initialValue);

    return <div>
        <label>
            {params.label}:
            <input type={"checkbox"}
                   checked={isChecked}
                   onChange={(e) => {
                       setIsChecked(e.target.checked)
                       params.onChange(e.target.checked)
                   }}
            />
        </label>
    </div>
}