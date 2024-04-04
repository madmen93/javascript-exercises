const removeFromArray = function() {
    firstArg = arguments[0];
    for(i = 1; i < arguments.length; i++){
        if(firstArg.includes(arguments[i])){
            do{
                let num = firstArg.indexOf(arguments[i]);
                let remove = firstArg.splice(num, 1);
            }while(firstArg.includes(arguments[i]));
        }
    }
    return firstArg;
    };


// Do not edit below this line
module.exports = removeFromArray;
