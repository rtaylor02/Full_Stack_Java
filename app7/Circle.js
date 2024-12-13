"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(_x, _y, _radius) {
        super(_x, _y);
        this._radius = _radius;
        this._radius = _radius;
    }
    get radius() { return this._radius; }
    set radius(radius) { this._radius = radius; }
    getInfo() { return `${this.shout()}` + super.getInfo() + `, radius = ${this._radius} ==> area = ${this.calculateArea()}`; }
    calculateArea() { return Math.PI * Math.pow(this._radius, 2); }
    shout() { return "Circle ==> "; }
}
exports.Circle = Circle;
