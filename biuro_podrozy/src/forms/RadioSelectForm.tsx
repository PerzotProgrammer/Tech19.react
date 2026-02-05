import type {FormParams} from "./FormParams.tsx";

interface RadioSelectParams extends FormParams<string> {
    group: string
    optionList: string[]
}

export default function RadioSelectForm(params: RadioSelectParams) {
    return <div>
        <p>{params.label}</p>
        <ul>
            {params.optionList.map(value => {
                return <li>
                    <label>
                        {value}:
                        <input
                            type="radio"
                            value={value}
                            radioGroup={params.group}
                            checked={params.initialValue == value}
                            onChange={e => params.onChange(e.target.value)}/>
                    </label>
                    <br/>
                </li>
            })}
        </ul>
    </div>
}