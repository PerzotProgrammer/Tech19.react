import {Solid} from "./Solid.ts";

export class Cube extends Solid {

    private _baseLength: number

    constructor(name: string, imageSrc: string, volumeFormula: string, areaFormula: string, baseLength: number) {
        super(name, imageSrc, volumeFormula, areaFormula);
        this._baseLength = baseLength;
    }

    get baseLength(): number {
        return this._baseLength;
    }

    set baseLength(value: number) {
        if (value < 0) this._baseLength = 0;
        else this._baseLength = value;
    }

    calculateArea(): number {
        return 6 * Math.pow(this._baseLength, 2);
    }

    calculateVolume(): number {
        return Math.pow(this._baseLength, 3);
    }
}