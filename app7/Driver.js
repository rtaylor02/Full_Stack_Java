"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let shapes = [];
shapes.push(new Circle_1.Circle(1, 2, 3));
shapes.push(new Rectangle_1.Rectangle(11, 22, 33, 44));
for (let shape of shapes) {
    console.log(shape.getInfo());
}
