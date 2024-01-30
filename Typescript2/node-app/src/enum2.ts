enum Direction {
    up = "up",
    down = "down",
    left = "left",
    right = "right",
}

const dosomething = (keyPressed: Direction) => {
    if (keyPressed == Direction.Left) {
        // Do something for Left
    }
}

dosomething(Direction.right);
dosomething(Direction.down);
console.log(Direction.up);
console.log(Direction.down);
