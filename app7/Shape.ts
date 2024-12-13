import { Thing } from "./Thing";

export abstract class Shape{
    constructor(private _x: number, private _y: number) {}
    public get x(): number { return this._x; }
    public get y(): number { return this._y; }
    public set x(x: number) { this._x = x; }
    public set y(y: number) { this._y = y; }
    public getInfo(): string { return `x = ${this._x}, y = ${this._y} ==> area = ${this.calculateArea()}`; }
    public abstract calculateArea(): number;
}