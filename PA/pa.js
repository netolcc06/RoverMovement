// in number
// out 0-999
Utils = require('./utils.js');

function parse(number){
    var unity, dec, hundred;

    if(number < 0){
        return "Go away, negative number";
    }

    hundred = parseInt(number/100);
    number = number%100;
    dec = parseInt(number/10);
    unity = number %10;

    connectorHundredsDecs = ' e ';
    if(dec === 0 || hundred === 0)
        connectorHundredsDecs = '';

    connectorDecsUnities = ' e ';
    if(unity === 0 || (hundred === 0 && dec === 0))
        connectorDecsUnities = ''

    if(hundred === 1 && dec === 0 && unity === 0)
        outMsg = 'cem';
    else if(hundred === 0 && dec === 1 && unity > 0){
        newString = dec.toString()+unity.toString();
        outMsg = Utils.specialCases[newString];
    }
    else{
      if(hundred === 0 && dec === 0){
        outMsg = Utils.unities[unity];
      }
      else if(hundred === 0){
          outMsg = Utils.decs[dec] +
          connectorDecsUnities + Utils.unities[unity];
      }
      else if(dec === 0){
        outMsg = Utils.hundreds[hundred] + connectorDecsUnities + Utils.unities[unity];
      }
      else{
        outMsg = Utils.hundreds[hundred] + connectorHundredsDecs + Utils.decs[dec] +
        connectorDecsUnities + Utils.unities[unity];
      }

    }

    return outMsg;
}

console.log(parse(800));
console.log(parse(801));
console.log(parse(820));
console.log(parse(824));
console.log(parse(100));
console.log(parse(101));
console.log(parse(120));
console.log(parse(124));
console.log(parse(71));
console.log(parse(12));
console.log(parse(10));
console.log(parse(40));
console.log(parse(3));
console.log(parse(64));
console.log(parse(93));
console.log(parse(90));
console.log(parse(200));
