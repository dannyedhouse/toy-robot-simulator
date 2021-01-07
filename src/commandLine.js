const print = require('./shared.js');
const robot = require('./robot.js');

/**
 * Validate the PLACE command parameters
 * @param {array} parameters Array containing the PLACE command parameters
 */
function validateParameters(parameters) {
    var x = parameters[1];
    var y = parameters[2];
    var d = parameters[3];

    if (isInRange(x) == false || isNaN(x)) {
        print.displayError("Invalid X co-ordinates entered");
        return false;
    } else if (isInRange(y) == false || isNaN(y)) {
        print.displayError("Invalid Y co-ordinates entered");
        return false;
    } else if (d != "NORTH" && d != "EAST" && d != "SOUTH" && d != "WEST") {
        print.displayError("Invalid direction entered (must be NORTH,EAST,SOUTH or WEST)");
        return false;
    }
    return true;
}

function isInRange(n) {
    if (n < 0 || n > 4) {
        return false;
    }
}

/**
 * Handle user input of a command
 * @param {number} commandCount Number of commands entered so far 
 * @param {string} input User input to handle
 */
function handleInput(commandCount, input) {
    input = input.toUpperCase().trim();
    parameters = input.split(/[ ,]+/);
    input = parameters[0];
    
    if (commandCount == 0 && input!='PLACE') {
        print.displayError("The first input must be the 'PLACE X,Y,F' command");
        return false;
    }

    switch(input) {
        case "PLACE":
            if (validateParameters(parameters)) {
                robot.placeRobot(parameters[1], parameters[2], parameters[3]);
                return true;
            }
            return false;
        case "MOVE":
            robot.move();
            return true;
        case "LEFT":
            robot.rotate(input);
            return true;
        case "RIGHT":
            robot.rotate(input);
            return true;
        case "REPORT":
            print.displayInfo("Robot location is: " + robot.report());
            return true;
        case "":
            print.displayError("Please enter a command");
            return false;
        default:
            print.displayError("Please enter a valid command");
            return false;
    }
}

module.exports = {handleInput}