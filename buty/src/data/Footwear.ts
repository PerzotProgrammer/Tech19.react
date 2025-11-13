import {getRandomAmount} from "./util.ts";

export class Footwear {
    uuid: string
    name: string
    imageSrc: string
    amount: number
    footwearType: FootwearType

    constructor(name: string, imageSrc: string, footwearType: FootwearType, amount: number = getRandomAmount()) {
        this.uuid = crypto.randomUUID()
        this.name = name
        this.imageSrc = imageSrc
        this.amount = amount
        this.footwearType = footwearType
    }
}

export enum FootwearType {
    SUMMER = 0,
    WINTER = 1
}


