"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() { return this._x; }
    get y() { return this._y; }
    set x(x) { this._x = x; }
    set y(y) { this._y = y; }
    getInfo() { return `x = ${this._x}, y = ${this._y} ==> area = ${this.calculateArea()}`; }
}
exports.Shape = Shape;
