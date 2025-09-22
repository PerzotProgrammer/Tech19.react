export class Person {
    private _fName: string;
    private _sName: string;
    private readonly _height: number;
    private readonly _sex: string;
    private readonly _age: number;

    constructor(fName: string, sName: string, height: number, sex: string, age: number) {
        this._fName = fName;
        this._sName = sName;
        this._height = height;
        this._sex = sex;
        this._age = age;
    }

    isMature(): boolean {
        return this._age >= 18;
    }

    getLocalizedName(): string {
        return `${this._fName.at(0)?.toUpperCase()}${this._fName.slice(1).toLowerCase()} 
        ${this._sName.at(0)?.toUpperCase()}${this._sName.slice(1).toLowerCase()}`;
    }

    getSex(): string {
        return this._sex;
    }

    getHeight(): number {
        return this._height;
    }

    getAge(): number {
        return this._age;
    }
}
