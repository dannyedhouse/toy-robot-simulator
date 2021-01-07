const print = require('./shared.js');
const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']; //valid directions

/**
 * Place the robot on the tabletop
 */
function placeRobot(xCoordinate, yCoordinate, direction) {
    this.location = {x: xCoordinate, y: yCoordinate, d: direction.toUpperCase()};
    print.displayInfo("Robot placed on table!")
}

/**
 * Move the robot one space forward in the direction facing
 */
function move() {
    var currentD = this.location.d;
    var currentX = this.location.x;
    var currentY = this.location.y;

    if (currentD == "NORTH" && currentY <4) {
        this.location.y++;
    } else if (currentD == "EAST" && currentX <4) {
        this.location.x++;
    } else if (currentD == "SOUTH" && currentY >0) {
        this.location.y--;
    } else if (currentD == "WEST" && currentX <4) {
        this.location.x--;
    } else {
        print.displayError("Could not move robot forward");
        return;
    }
    print.displayInfo("Moved robot one space " + currentD);
}

/**
 * Rotate the robot either LEFT or RIGHT
 */
function rotate(direction) {
    var index = directions.indexOf(this.location.d);

    if (direction == "LEFT") {
        index--;
    } else {
        index ++;
    }

    if (index <0) {
        index = 3;
    } else if (index >3) {
        index = 0;
    }
    print.displayInfo("Direction updated to "+directions[index]);
    this.location.d = directions[index];
}

/**
 * Get the X,Y co-ordinates and direction facing
 */
function report() {
    return (Object.values(this.location).toString());
}

module.exports = {placeRobot, move, rotate, report}