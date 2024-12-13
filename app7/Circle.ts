import { Shape } from "./Shape";
import { Thing } from "./Thing";

export class Circle extends Shape implements Thing {
    constructor(_x : number, _y : number, private _radius : number) { 
        super(_x, _y); 
        this._radius = _radius;
    }
    
    get radius() : number { return this._radius; }
    set radius(radius : number) { this._radius = radius; }
    getInfo() : string { return `${this.shout()}` + super.getInfo() + `, radius = ${this._radius} ==> area = ${this.calculateArea()}`; }
    calculateArea(): number { return Math.PI * Math.pow(this._radius, 2); }
    shout(): string { return "Circle ==> "; }
}