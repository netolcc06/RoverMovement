/**
 * This file contains a few structures created to facilitate how characters are interwined with
 * integer representations for North, East, South, and West. My solution uses this approach because
 * it makes easy to change the directions by using simple integer arithmetics.
 * Example: North is represented by 0. Adding 1 means turning to right. Subtracting 1 means turning to left.
 * In case you are facing North (direction == 0), the subtraction result is set to 3 (West), since there is not
 * negative representations for the directions.
 * directions => maps the directions to the displacements related to each one. Going North, for example, means
 * going from position [x,y] to [x, y+1]. That's why the associated displacement is [0,1].
 * map => maps characters to integers.
 * inverseMap => maps integers to characters
 */

const directions = {0:[0,1], 1:[1,0], 2:[0,-1], 3:[-1,0]}
const map = {N:0, E:1, S:2, W:3}
const inverseMap = {0:'N', 1:'E', 2:'S', 3:'W'}

module.exports.directions = directions;
module.exports.map = map;
module.exports.inverseMap = inverseMap;
