"use strict";
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
const dosomething = (keyPressed) => {
    if (keyPressed == Direction.Left) {
        // Do something for Left
    }
};
dosomething(Direction.right);
dosomething(Direction.down);
console.log(Direction.up);
console.log(Direction.down);
