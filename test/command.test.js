const expect = require("chai").expect;
const commandLine = require('../src/commandLine.js');
const robot = require('../src/robot.js');

before(() => {
    process.env.NODE_ENV = 'test';
});

describe('Invalid command handling', () => {
    it('should return false if no command is entered', () => {
        var userInput = "";
        var commandCount = 1;
        var result = commandLine.handleInput(commandCount, userInput);
        expect(result).to.equal(false);
    });

    it ('should return false if an invalid command is entered', () => {
        var userInput = "input";
        var commandCount = 1;
        var result = commandLine.handleInput(commandCount, userInput);
        expect(result).to.equal(false);
    });

    it ('should return false if the first command is not PLACE', () => {
        var userInput = "move";
        var commandCount = 0;
        var result = commandLine.handleInput(commandCount, userInput);
        expect(result).to.equal(false);
    });
});

describe('Test PLACE command', () => {
    it('should place the robot on the table top at the given co-ordinates', () => {
        var userInput = "PLACE 3,3,NORTH";
        var commandCount = 0;
        var result = commandLine.handleInput(commandCount, userInput);
        var location = robot.location;
        var expectedLocation = {x: "3", y: "3", d: "NORTH"};
        expect(location).to.deep.equal(expectedLocation);
        expect(result).to.equal(true);
    });
});

describe('Test MOVE command', () => {
    it('should move the robot one space in the direction facing', () => {
        robot.placeRobot(3,3,'NORTH');
        var userInput = "MOVE";
        var commandCount = 1;
        var result = commandLine.handleInput(commandCount, userInput);
        var location = robot.location;
        var expectedLocation = {x: 3, y: 4, d: "NORTH"};
        expect(location).to.deep.equal(expectedLocation);
        expect(result).to.equal(true);
    });
});

describe('Test LEFT command', () => {
    it('should rotate the robot left', () => {
        robot.placeRobot(3,3,'NORTH');
        var userInput = "LEFT";
        var commandCount = 1;
        var result = commandLine.handleInput(commandCount, userInput);
        var location = robot.location;
        var expectedLocation = {x: 3, y: 3, d: "WEST"};
        expect(location).to.deep.equal(expectedLocation);
        expect(result).to.equal(true);
    });
});

describe('Test RIGHT command', () => {
    it('should rotate the robot right', () => {
        robot.placeRobot(3,3,'NORTH');
        var userInput = "RIGHT";
        var commandCount = 1;
        var result = commandLine.handleInput(commandCount, userInput);
        var location = robot.location;
        var expectedLocation = {x: 3, y: 3, d: "EAST"};
        expect(location).to.deep.equal(expectedLocation);
        expect(result).to.equal(true);
    });
});

describe('Test REPORT command', () => {
    it('should output the current robot location', () => {
        robot.placeRobot(3,3,'NORTH');
        var userInput = "RIGHT";
        var commandCount = 1;
        var result = commandLine.handleInput(commandCount, userInput);
        var output = robot.report();
        var expectedOutput = "3,3,EAST"
        expect(output).to.deep.equal(expectedOutput);
        expect(result).to.equal(true);
    });
});