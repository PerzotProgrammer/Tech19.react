import {useState} from "react";
import type {FormParams} from "./FormParams.tsx";


export default function EmailForm(params: FormParams<string>) {

    const [currentEmail, setCurrentEmail] = useState(params.initialValue);

    return <div>
        <label>
            {params.label}:
            <input
                type={"email"}
                value={currentEmail}
                onChange={(e) => {
                    params.onChange(e.target.value)
                    setCurrentEmail(e.target.value)
                }
                }/>
        </label>
    </div>;

}