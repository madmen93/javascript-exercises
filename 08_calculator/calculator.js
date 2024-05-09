const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, sum) => total + sum, 0);
};

const multiply = function(arr) {
return arr.reduce((total, mult) => total * mult, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if(n == 0)
    return 1;
  else{
    let total = 1;
    for(i = n; i > 0; i--){
      total *= i;
  }
  return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
