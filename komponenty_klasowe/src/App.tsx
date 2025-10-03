import './App.css';
import {Header} from "./Header.tsx";
import {useState} from "react";
import {carBrands, cars} from "./SampleData.ts";
import {Footer} from "./Footer.tsx";


export default function App() {


    const header = new Header({
        shopName: "40 lat minęło",
        shopMotto: "Klasyki PRL-u z lat 1960-1990"
    });

    const footer = new Footer({
        openFrom: "8:30",
        openTo: "19:30"
    });

    const [currentCarBrand, setCurrentCarBrand] = useState(carBrands[0]);
    const [currentCars, setCurrentCars] = useState(() => {
        for (let i = cars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cars[i];
            cars[i] = cars[j];
            cars[j] = temp;
        }
        return cars
    });

    return (
        <>
            {header.render()}

            <label htmlFor="carBrand">Wybierz markę</label>
            <br/>
            <select className={"selectList"} name="carBrand" id="carBrand" onChange={event => {
                setCurrentCarBrand(() => event.target.value)
            }}>
                {carBrands.map(
                    (brand) => {
                        return (
                            <option className={"selectOption"} value={brand}>{brand}</option>
                        )
                    }
                )}
            </select>
            <div className={"carsList"}>
                {currentCars
                    .filter((carCard) =>
                        carCard.props.carBrand == currentCarBrand ||
                        currentCarBrand == carBrands[0])
                    .map((carCard) => {
                        carCard.setCallback(() => {
                            setCurrentCars(prevState => prevState.filter(it => carCard !== it))
                        })
                        return carCard.render()
                    })
                }
            </div>

            {footer.render()}
        </>
    )
}
