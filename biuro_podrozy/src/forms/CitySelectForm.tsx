import {destinationList} from "../data/DestinationList.tsx";
import type {FormParams} from "./FormParams.tsx";
import {useState} from "react";
import type {City} from "../data/City.tsx";

export default function CitySelectForm(params: FormParams<City>) {

    const [currentCity, setCurrentCity] = useState(destinationList[0]);

    return <div>
        <label>
            {params.label}:
            <select name="destination"
                    id="destination"
                    value={currentCity.name}
                    onChange={
                        (e) => {
                            const parsed = destinationList.find((it: City) => {
                                return it.name == e.target.value
                            }) as City
                            setCurrentCity(parsed)
                            params.onChange(parsed)
                        }
                    }>
                {destinationList.map((it: City) => {
                    return <option value={it.name}>{it.name}</option>
                })}
            </select>
        </label>
    </div>;
}