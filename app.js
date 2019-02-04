Field = require('./field.js');
Rover = require('./rover.js');
Utils = require('./utils.js');
fs = require('fs');

/**
  * This script used node.js to read and parse an input file (in my case, hardcoded as 'input.txt').
  * Instead of reading it line by line, it reads its whole content and uses some logic to address the change of lines.
  * There is a variable line (var line intialized as 0) to track what kind of line input we are expecting.
  * line === 0 => expects to read the first line of the file, which contains information regarding the grid dimensions.
  * line === 1 => expects to read initial information about a rover to enter the field (position and orientation).
  * line === 2 => expects to read the instructions to be followed by a rover.
  */

// The variable data stores the content of the file.
fs.readFile('input.txt', 'utf8', function(err, data) {
    // Stops the program if there is any error while trying to read the file.
    if (err) {
      return console.log(err);
    }

    // Takes the first line as input. It is unique since it describes the grid dimensions.
    // data[1] accounts for a space ' ' and because of that, it is ignored.
    width = parseInt(data[0]);
    height = parseInt(data[2]);

    // We cannot have a field with negative dimensions.
    if(width <= 0 || height <= 0)
      return "Null or negative dimensions for Width or height";

    // Creates the field with the dimensions obtained from the file.
    var field = new Field(width,height);
    // Holds the line state, as described above.
    var line = 0;
    // Variable to store the data for the current rover to be processed.
    var rover;

    // It starts with i = 3 because we have already read the grid dimensions data.
    for(var i = 3; i< data.length; i++){
        //It needs to find a line break to go the the another line case.
        if(line === 0){
          // Changes line state.
          if(data[i] === '\n')
            line = 1;
        }
        else if(line === 1){
          // Takes the first two characters to store as the current rover position.
          // data[i+1] accounts for an empty space ' ' and it is ignored because of that.
          position = [];
          position[0] = parseInt(data[i]);
          position[1] = parseInt(data[i+2]);
          // Stores the rover orientation by reading data[i+4].
          // data[i+3] accounts for an empty space ' ' and it is ignored because of that.
          // Utils.map is used to transform a letter into a number.
          rover = new Rover(position,Utils.map[data[i+4]]);
          // Updates the var i in order to keep track of the next line.
          while(data[i]!='\n')
            i++;
          // Changes line state in order to read the commands for the rover.
          line = 2;
        }
        else if(line === 2){
          // Sends a command to the rover (data[i]) so it can move in the field according to its dimensions.
          rover.update(data[i], field.getWidth(), field.getHeight());
          // Updates rover position in the field.
          if(data[i] === 'M')
            field.update(rover.getPosition());

          // Keeps track of the end of the line and file so it can print the field, rover position and orientation.
          if(data[i] === '\n' || i === data.length-1){
            field.printField();
            console.log(rover.getPosition()[0]+ ' '+ rover.getPosition()[1] + ' ' +
              Utils.inverseMap[rover.getOrientation()] + '\n') ;
            // Changes line state in order to read data from a new rover.
            line = 1;
          }
        }
    }
});
