import {Footwear, FootwearType} from "../../data/Footwear.ts";
import {type ReactNode} from "react";
import FootwearCard from "./FootwearCard.tsx";

interface FootwearListProps {
    header: string,
    footwearList: Footwear[],
    footwearType: FootwearType
}

export default function FootwearList(props: FootwearListProps) {
    return (
        <div>
            <h1>{props.header}</h1>
            <div className="FootwearList">
                {props.footwearList
                    .filter(footwear => footwear.footwearType == props.footwearType)
                    .map((it: Footwear): ReactNode => {
                        return (
                            <FootwearCard key={it.uuid} footwear={it}/>
                        )
                    })
                }
            </div>
        </div>
    )
}