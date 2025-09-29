import {Cube} from "./solids/Cube.ts";
import {Cuboid} from "./solids/Cuboid.ts";
import {Sphere} from "./solids/Sphere.ts";
import {useState} from "react";
import type {Solid} from "./solids/Solid.ts";

interface DimensionsOfSolidProps {
    solid: Solid,
    onChange: () => void;
}

export default function DimensionsOfSolid(props: DimensionsOfSolidProps) {
    const [baseLength, setBaseLength] = useState((props.solid as Cube).baseLength);
    const [aDimLength, setADimLength] = useState((props.solid as Cuboid).aDimLength);
    const [bDimLength, setBDimLength] = useState((props.solid as Cuboid).bDimLength);
    const [cDimLength, setCDimLength] = useState((props.solid as Cuboid).cDimLength);
    const [radiusLength, setRadiusLength] = useState((props.solid as Sphere).radiusLength);
    if (props.solid instanceof Cube) {
        return (
            <ol>
                <li>Długość boku:
                    <input type="number"
                           value={baseLength}
                           onChange={event => {
                               (props.solid as Cube).baseLength = Number(event.target.value);
                               setBaseLength((props.solid as Cube).baseLength);
                               props.onChange();
                           }}/>
                </li>
            </ol>
        );
    } else if (props.solid instanceof Cuboid) {
        return (
            <ol>
                <li>Wymiar a:
                    <input type="number"
                           value={aDimLength}
                           onChange={event => {
                               (props.solid as Cuboid).aDimLength = Number(event.target.value);
                               setADimLength((props.solid as Cuboid).aDimLength);
                               props.onChange();
                           }}/>
                </li>
                <li>Wymiar b:
                    <input type="number"
                           value={bDimLength}
                           onChange={event => {
                               (props.solid as Cuboid).bDimLength = Number(event.target.value);
                               setBDimLength((props.solid as Cuboid).bDimLength);
                               props.onChange();
                           }}/>
                </li>
                <li>Wymiar c:
                    <input type="number"
                           value={cDimLength}
                           onChange={event => {
                               (props.solid as Cuboid).cDimLength = Number(event.target.value);
                               setCDimLength((props.solid as Cuboid).cDimLength);
                               props.onChange();
                           }}/>
                </li>
            </ol>
        );
    } else if (props.solid instanceof Sphere) {
        return (
            <ol>
                <li>Średnica:
                    <input type="number"
                           value={radiusLength}
                           onChange={event => {
                               (props.solid as Sphere).radiusLength = Number(event.target.value);
                               setRadiusLength((props.solid as Sphere).radiusLength);
                               props.onChange();
                           }}/>
                </li>
            </ol>
        );
    }
}