import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let shapes:Shape[] = [];
shapes.push(new Circle(1, 2, 3));
shapes.push(new Rectangle(11, 22, 33, 44));

for (let shape of shapes) {
    console.log(shape.getInfo());
}