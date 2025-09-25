import {Solid} from "./Solid.ts";

export class Cuboid extends Solid {

    private _aDimLength: number
    private _bDimLength: number
    private _cDimLength: number

    constructor(name: string, imageSrc: string, volumeFormula: string, areaFormula: string, aDimLength: number, bDimLength: number, cDimLength: number) {
        super(name, imageSrc, volumeFormula, areaFormula);
        this._aDimLength = aDimLength;
        this._bDimLength = bDimLength;
        this._cDimLength = cDimLength;
    }

    get cDimLength(): number {
        return this._cDimLength;
    }

    set cDimLength(value: number) {
        if (value < 0) this._cDimLength = 0;
        else this._cDimLength = value;
    }

    get bDimLength(): number {
        return this._bDimLength;
    }

    set bDimLength(value: number) {
        if (value < 0) this._bDimLength = 0;
        else this._bDimLength = value;
    }

    get aDimLength(): number {
        return this._aDimLength;
    }

    set aDimLength(value: number) {
        if (value < 0) this._aDimLength = 0;
        else this._aDimLength = value;
    }

    calculateArea(): number {
        return (this._aDimLength * 2) + (this._bDimLength * 2) + (this._cDimLength * 2);
    }

    calculateVolume(): number {
        return this._aDimLength * this._bDimLength * this._cDimLength
    }
}