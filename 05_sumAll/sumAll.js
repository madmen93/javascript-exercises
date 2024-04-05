const sumAll = function(num1, num2) {
    //if(isNaN(num1) && isNaN(num2)){
        if(num1 >= 0 && num2 >= 0 && typeof num1 != 'string' && typeof num2 != 'string'){
            let sum = 0;
            let max;
            let min;
            if(num1 > num2){
                max = num1;
                min = num2;
            }else{
                max = num2;
                min = num1;
            }
                for(i = 0; i < max; i++){
                    sum += min;
                    min++;
            }
            return sum;
        }else{
            return 'ERROR';
        }
    //}

   
};

/* sumAll(10, "90");
sumAll(-10, 4);
sumAll(123, 1);
sumAll(1, 4000);
sumAll(1, 4); */

// Do not edit below this line
module.exports = sumAll;
