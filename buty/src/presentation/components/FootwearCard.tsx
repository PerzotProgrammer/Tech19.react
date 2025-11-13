import type {Footwear} from "../../data/Footwear.ts";
import {useState} from "react";

interface FootwearCardProps {
    footwear: Footwear
}


export default function FootwearCard(props: FootwearCardProps) {
    const [amount, setAmount] = useState(props.footwear.amount);

    return (
        <div className="FootwearCard">
            <h3>{props.footwear.name}</h3>
            <img src={props.footwear.imageSrc} alt={props.footwear.imageSrc}/>
            <h3>ILOŚĆ NA STANIE: {amount}</h3>

            <input type="button" value="Sprzedaj" onClick={() => {
                if (props.footwear.amount > 0) {
                    {
                        props.footwear.amount -= 1;
                        setAmount(amount - 1);
                    }
                }
            }}/>

            <input type="button" value="Przyjmij" onClick={() => {
                const promptValue = prompt("Proszę podać ilość: ");
                const added = promptValue ? Number.parseInt(promptValue) : 0;
                props.footwear.amount += added;
                setAmount(amount + added);
            }}/>
        </div>
    )
}