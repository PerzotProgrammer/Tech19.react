import {useState} from 'react'
import '../App.css'
import Header from "./Header.tsx";
import {Footwear, FootwearType,} from "../../data/Footwear.ts";
import FootwearList from "./FootwearList.tsx";
import {getRandomAmount, getRandomItems} from "../../data/util.ts";
import {summerFootwear, winterFootwear} from "../../data/SampleData.ts";
import Clock from "./Clock.tsx";

export default function App() {

    const [footwearList, setFootwearList] = useState(
        [...getRandomItems(winterFootwear, 3),
            ...getRandomItems(summerFootwear, 3)]);

    return (
        <div className="App">
            <Header companyName={"Moje obuwie"}
                    onReceiveSummerFootwear={() => {
                        const tempList: Footwear[] = getRandomItems(summerFootwear, getRandomAmount());
                        const newList = tempList.filter(footwear => !footwearList.includes(footwear))

                        setFootwearList(
                            [...footwearList,
                                ...newList
                            ])
                    }}
                    onReceiveWinterFootwear={() => {
                        const tempList: Footwear[] = getRandomItems(winterFootwear, getRandomAmount());
                        const newList = tempList.filter(footwear => !footwearList.includes(footwear))

                        setFootwearList(
                            [...footwearList,
                                ...newList
                            ])
                    }}
                    deleteSoldItems={() => {
                        setFootwearList(
                            footwearList.filter(footwear => footwear.amount != 0)
                        )
                    }}/>

            <FootwearList header={"Letnie"} footwearList={footwearList} footwearType={FootwearType.SUMMER}/>
            <FootwearList header={"Zimowe"} footwearList={footwearList} footwearType={FootwearType.WINTER}/>
            <Clock/>
        </div>
    );
}

