const expect = require("chai").expect;
const robot = require('../src/robot.js');

before(() => {
    process.env.NODE_ENV = 'test';
});

describe('Test the PLACE function', () => {
    it('should update the location of the robot given the co-ordinates and direction provided', () => {
        robot.placeRobot(0,0,"WEST");
        var location = robot.location;
        var expectedLocation = {x: 0, y: 0, d: "WEST"};
        expect(location).to.deep.equal(expectedLocation);
    });
});

describe('Test the MOVE function', () => {
    it('should move the robot one space forward horizontally in the direction with space left on the table', () => {
        robot.placeRobot(3,3,"EAST");
        robot.move();
        var location = robot.location;
        var expectedLocation = {x: 4, y: 3, d: "EAST"};
        expect(location).to.deep.equal(expectedLocation);
    });

    it('should move the robot one space forward vertically in the direction with space left on the table', () => {
        robot.placeRobot(3,3,"NORTH");
        robot.move();
        var location = robot.location;
        var expectedLocation = {x: 3, y: 4, d: "NORTH"};
        expect(location).to.deep.equal(expectedLocation);
    });

    it('should not move the robot if it will fall off the table', () => {
        robot.placeRobot(3,4,"NORTH");
        robot.move();
        var location = robot.location;
        var expectedLocation = {x: 3, y: 4, d: "NORTH"};
        expect(location).to.deep.equal(expectedLocation);
    });
});

describe('Test the rotate function', () => {
    it('should turn the robot left', () => {
        robot.placeRobot(3,4,"WEST");
        robot.rotate("LEFT");
        var location = robot.location;
        var expectedLocation = {x: 3, y: 4, d: "SOUTH"};
        expect(location).to.deep.equal(expectedLocation);
    });

    it('should turn the robot right', () => {
        robot.placeRobot(1,1,"SOUTH");
        robot.rotate("RIGHT");
        var location = robot.location;
        var expectedLocation = {x: 1, y: 1, d: "WEST"};
        expect(location).to.deep.equal(expectedLocation);
    });
});

describe('Test move and rotate functionality together', () => {
    it('should move and rotate the robot according to input', () => {
        robot.placeRobot(3,4,"WEST");
        robot.move();
        robot.rotate("LEFT");
        robot.move();
        robot.rotate("LEFT");
        var location = robot.location;
        var expectedLocation = {x: 2, y: 3, d: "EAST"};
        expect(location).to.deep.equal(expectedLocation);
    });
});