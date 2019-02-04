/**
 * This file contains the test cases described in the technical challenge specification.
 * Before diving into how to read the input file, I developed the logic in order to achieve the desired results.
 * That's an approach I enjoy, since I am not tackling two different problems (logic + I/O) at the same time.
 * After solving this, I changed my focus to handling the input.
 */

Field = require('./field.js');
Rover = require('./rover.js');
Utils = require('./utils.js');

var assert = {
  equal: function(firstValue, secondValue) {
    if (firstValue != secondValue)
      throw new Error('Assert failed, ' + firstValue + ' is not equal to ' + secondValue + '.');
  }
};

function moveFirstRover(){
  field = new Field(5,5);
  // 5 5
  // 1 2 N
  rover = new Rover([1,2], 0);
  // LMLMLMLMM
  rover.update('L', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  rover.update('M', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  rover.update('L', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  rover.update('M', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  rover.update('L', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  rover.update('M', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  rover.update('L', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  rover.update('M', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  rover.update('M', field.getWidth(), field.getHeight());
  field.update(rover.getPosition());
  field.printField();
  console.log(rover.getPosition() + " " + Utils.inverseMap[rover.getOrientation()]);
  return rover.getPosition() + " " + Utils.inverseMap[rover.getOrientation()];
}

function moveSecondRover(){

  field = new Field(5,5);
  // 3 3 E
  // MMRMMRMRRM
  rover2 = new Rover([3,3], 1);
  rover2.update('M', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('M', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('R', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('M', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('M', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('R', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('M', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('R', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('R', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  rover2.update('M', field.getWidth(), field.getHeight());
  field.update(rover2.getPosition());
  field.printField();
  console.log(rover2.getPosition()+ " " + Utils.inverseMap[rover2.getOrientation()]);
  return rover2.getPosition()+ " " + Utils.inverseMap[rover2.getOrientation()];
}

function testMoveFirstRover(){
  expectedOutput = [1,3] + ' ' + 'N'
  try{
      assert.equal(moveFirstRover(), expectedOutput);
      console.log('Passed');
  }catch(error){
      console.log(error.message);
  }
}

function testMoveSecondRover(){
  expectedOutput = [5,1] + ' ' + 'E'
  try{
      assert.equal(moveSecondRover(), expectedOutput);
      console.log('Passed');
  }catch(error){
      console.log(error.message);
  }
}

testMoveFirstRover();
testMoveSecondRover();
