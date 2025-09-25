export abstract class Solid {

    private readonly _name: string
    private readonly _imageSrc: string
    private readonly _volumeFormula: string
    private readonly _areaFormula: string

    protected constructor(name: string, imageSrc: string, volumeFormula: string, areaFormula: string) {
        this._name = name;
        this._imageSrc = imageSrc;
        this._volumeFormula = volumeFormula;
        this._areaFormula = areaFormula;
    }

    get areaFormula(): string {
        return this._areaFormula;
    }

    get volumeFormula(): string {
        return this._volumeFormula;
    }

    get imageSrc(): string {
        return this._imageSrc;
    }

    get name(): string {
        return this._name;
    }

    abstract calculateVolume(): number

    abstract calculateArea(): number
}