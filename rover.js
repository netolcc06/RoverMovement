Utils = require('./utils.js');

class Rover{
  // Creates a rover with position and orientation.
  constructor(position, orientation){
    // orientation has already been transformed into 0 || 1 || 2 || 3.
    this.position = position;
    this.orientation = orientation;
  }

  // Updates rover according to the command sent ('M' || 'L' || 'R').
  update(instruction, width, height){
    switch(instruction){
      case 'M':
        // In this case, the rover is sent to move. The new position is calculated by using
        // the displacement associated with its current orientation.
        var position = [this.position[0] + Utils.directions[this.orientation][0],this.position[1] +
          Utils.directions[this.orientation][1]];
        // Tests whether the new position lies into the field or not.
        this.updatePosition(position, width, height);
        break;
      case 'R':
        // Turns right by using integer arithmetics described in utils.js
        this.orientation = (this.orientation + 1)%4;
        break;
      case 'L':
        // Turns left by using integer arithmetics described in utils.js
        this.orientation = this.orientation - 1;
        if(this.orientation < 0 )
          this.orientation = 3;
        break;
      default:
        break;
    }
  }

  // Tests whether the new position lies into the field or not. In case it is, its position is actually updated.
  updatePosition(position, width, height){
    if(position[0] < height && position[0] >= 0 && position[1]>=0 && position[1] < width){
        this.position = position;
    }
  }

  getPosition(){
    return this.position;
  }

  getOrientation(){
    return this.orientation;
  }
}

module.exports = Rover;
