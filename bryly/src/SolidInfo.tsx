import type {Solid} from "./solids/Solid.ts";
import {Cube} from "./solids/Cube.ts";
import {Cuboid} from "./solids/Cuboid.ts";
import {Sphere} from "./solids/Sphere.ts";
import cubeImg from "./assets/szescian.jpg";
import cuboidImg from "./assets/prostopadloscian.jpg";
import sphereImg from "./assets/kula.jpg";
import DimensionsOfSolid from "./DimensionsOfSolid.tsx";
import {useState} from "react";

interface SolidInfoProps {
    solid: Solid
}

export default function SolidInfo(props: SolidInfoProps) {
    let img: string = "";
    const [area, setArea] = useState(props.solid.calculateArea());
    const [volume, setVolume] = useState(props.solid.calculateVolume());

    if (props.solid instanceof Cube) {
        img = cubeImg;
    } else if (props.solid instanceof Cuboid) {
        img = cuboidImg;
    } else if (props.solid instanceof Sphere) {
        img = sphereImg;
    }

    return (
        <tr>
            <td className="solidName">{props.solid.name}</td>
            <td><img src={img} alt={img}/></td>
            <td>
                <p>Objętość: {props.solid.volumeFormula}</p>
                <br/>
                <p>Pole: {props.solid.areaFormula}</p>
            </td>
            <td>
                <DimensionsOfSolid solid={props.solid} onChange={() => {
                    setArea(props.solid.calculateArea());
                    setVolume(props.solid.calculateVolume());
                }}/>
                <p>Pole: {area}</p>
                <p>Objętość: {volume}</p>
            </td>
        </tr>
    );
}