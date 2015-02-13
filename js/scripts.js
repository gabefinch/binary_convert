var binToDec = function(binary){
  var result = 0;
  var reverseBin = ((binary.split("")).reverse()).join("");

  for(var i=0; i < reverseBin.length; i++){
    if(reverseBin[i] == '1'){
      result = result + Math.pow(2,i);
    }
  }

  return result;

};

var trinToDec = function(trinary){
  var result = 0;
  var reverseTrin = ((trinary.split("")).reverse()).join("");

  for(var i=0; i < reverseBin.length; i++){
    if(reverseTrin[i] == '1'){
      result = result + Math.pow(3,i);
    } else if (reverseTrin[i] == '2'){
      result = result + Math.pow(3,i) + Math.pow(3,i);
    }
  }

  return result;

};

var hexToDec = function(hexadecimal){
var result = 0;
var reverseHex = ((hexadecimal.split("")).reverse()).join("");
var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
for(var i=0; i < reverseHex.length; i++){
  result = result + (Math.pow(16,i))*hexDigits.indexOf(reverseHex[i]);
}

return result;

};


var decToHex = function(decimal){
  var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
  var hex = "";
  var numDigits = Math.floor(Math.log(decimal)/Math.log(16)) + 1;
  var temp = 0;

  for(var i=numDigits; i > 0; i--){
    temp = Math.floor(decimal/Math.pow(16,(i-1)));
    hex = hex.concat(hexDigits[temp]);
    decimal = decimal - (Math.pow(16,i-1) * temp);

  }

  return hex;

};
