import {Cube} from "./solids/Cube.ts";
import type {Solid} from "./solids/Solid.ts";
import {Cuboid} from "./solids/Cuboid.ts";
import {Sphere} from "./solids/Sphere.ts";
import cubeImg from "./assets/szescian.jpg";
import cuboidImg from "./assets/prostopadloscian.jpg";
import sphereImg from "./assets/kula.jpg";

interface SolidInfoProps {
    solid: Solid
}

export default function SolidInfo(props: SolidInfoProps) {
    let img: string = "";
    const listOfValues: number[] = [];
    const area: number = props.solid.calculateArea();
    const volume: number = props.solid.calculateVolume();

    if (props.solid instanceof Cube) {
        listOfValues.push((props.solid as Cube).baseLength);
        img = cubeImg;
    } else if (props.solid instanceof Cuboid) {
        const cuboid = (props.solid as Cuboid);

        listOfValues.push(cuboid.aDimLength);
        listOfValues.push(cuboid.bDimLength);
        listOfValues.push(cuboid.cDimLength);
        img = cuboidImg;
    } else if (props.solid instanceof Sphere) {
        listOfValues.push((props.solid as Sphere).radiusLength);
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
                <ol>
                    {listOfValues.map((elem, index) => {
                        return (<li>
                            <p>Długość {String.fromCharCode(index + 65)} : {elem}</p>
                        </li>)
                    })}
                </ol>
                <p>Pole: {area}</p>
                <p>Objętość: {volume}</p>
            </td>
        </tr>
    );
}