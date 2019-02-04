/**
 * A simple class to store the field.
 * In terms of the logic necessary to solve the problem, this abstraction is not really mandatory.
 * However, I chose to print the field after each iteration (for the hardcoded tests) in order to realize
 * how the rover was moving.
 */

class Field{
  // Initializes the field with its dimensions
  constructor(width, height){
    this.width = width+1;
    this.height = height+1;
    this.createField();
  }

  // Creates the field as matrix of characters. 'x' is a place in the field. '0' is the rover current location.
  createField(){
    this.field = [];
    this.field = new Array(this.height);
    for(var i = 0; i < this.height; i++){
      this.field[i] = new Array(this.width);
      for(var j=0; j< this.width; j++){
        this.field[i][j] = 'x';
      }
    }
    return this.field;
  }

  // Resets the field.
  clearField(){
    for(var i = 0; i < this.height; i++){
      for(var j=0; j< this.width; j++){
        this.field[i][j] = 'x';
      }
    }
  }

  // Prints de field
  printField(){
    for(var i = this.height-1; i >=0 ; i--){
        console.log(this.field[i]);
      }
    console.log('\n');
  }

  // Returns the width of the field
  getWidth(){
    return this.width;
  }

  // Returns the height of the field
  getHeight(){
    return this.height;
  }

  // Takes a new rover position and updates it in the field.
  update(position){
    this.clearField();
    this.field[position[0]][position[1]] = '0';
  }
}

module.exports = Field;
