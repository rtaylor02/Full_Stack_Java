import { Shape } from "./Shape";
import { Thing } from "./Thing";

export class Rectangle extends Shape implements Thing {
    constructor(x: number, y: number, private _width : number, private _length : number) {
        super(x, y);
        this._length = _length;
        this._width = _width;
    }
    public get length():number { return this._length; }
    public set length(length:number) { this._length = length; }
    public get width():number { return this._width; }
    public set width(width:number) { this._width = width; }
    public getInfo():string { return `${this.shout()}` + super.getInfo() + `, length = ${this._length}, width = ${this._width} ==> area = ${this.calculateArea()}`; }
    public calculateArea(): number { return this._length * this._width; }
    public shout(): string { return "Rectangle ==> " }
}