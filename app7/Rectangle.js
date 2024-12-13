"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(x, y, _width, _length) {
        super(x, y);
        this._width = _width;
        this._length = _length;
        this._length = _length;
        this._width = _width;
    }
    get length() { return this._length; }
    set length(length) { this._length = length; }
    get width() { return this._width; }
    set width(width) { this._width = width; }
    getInfo() { return `${this.shout()}` + super.getInfo() + `, length = ${this._length}, width = ${this._width} ==> area = ${this.calculateArea()}`; }
    calculateArea() { return this._length * this._width; }
    shout() { return "Rectangle ==> "; }
}
exports.Rectangle = Rectangle;
