const chalk = require('chalk');
const commandLine = require('./commandLine.js');

function displayWelcomeInstructions() {
    console.log(chalk.yellow.bold.underline("Welcome to Toy Robot Simulator "));
    console.log("Please start by entering the PLACE command to place the robot on the 5x5 tabletop:");
    console.log(chalk.green("PLACE X,Y,F"));
    console.log(chalk.cyan("-> where X and Y are co-ordinates between 0 and 5, and F is the direction of either NORTH, SOUTH, EAST or WEST"));
    console.log("Then enter any of the following commands (ignoring parentheses):")
    console.log(chalk.green("PLACE X,Y,F\nMOVE (move one space forward)\nLEFT (rotate 90 degrees left)\nRIGHT (rotate 90 degrees right)\nREPORT (display co-ordinates)"));
    console.log("Please enter your commands... (starting with the PLACE command)");
}

function input() {
    var input = process.openStdin();
    var commandCount = 0;

    input.addListener('data', function(d) {
        validCommand = commandLine.handleInput(commandCount, d.toString());
        if (validCommand) {
            commandCount++;
        }
    });
}

function run() {
    displayWelcomeInstructions();
    input();
}

run();