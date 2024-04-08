const convertToCelsius = function(f) {
c = (f - 32) * 5 / 9;
cRounded = Math.round(c * 10) / 10;
return cRounded;
};

const convertToFahrenheit = function(c) {
f = (c * (9 / 5) + 32);  
fRounded = Math.round(f * 10) /10;
return fRounded;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
