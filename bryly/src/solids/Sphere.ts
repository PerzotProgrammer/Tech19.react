import {Solid} from "./Solid.ts";

export class Sphere extends Solid {

    private _radiusLength: number

    constructor(name: string, imageSrc: string, volumeFormula: string, areaFormula: string, radiusLength: number) {
        super(name, imageSrc, volumeFormula, areaFormula);
        this._radiusLength = radiusLength;
    }

    get radiusLength(): number {
        return this._radiusLength;
    }

    set radiusLength(value: number) {
        if (value < 0) this._radiusLength = 0;
        else this._radiusLength = value;
    }

    calculateArea(): number {
        return Number((4 * Math.PI * Math.pow(this._radiusLength, 2)).toFixed(4));
    }

    calculateVolume(): number {
        return Number((4 / 3 * Math.PI * Math.pow(this._radiusLength, 3)).toFixed(4));
    }

}