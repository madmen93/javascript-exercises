const repeatString = function(text, n) {

    let errorText = 'ERROR';

    if(n >= 0){
        let finalText = text.repeat(n);
        return finalText;
    }else if(n < 0){
        return errorText;
    }






};

// Do not edit below this line
module.exports = repeatString;
