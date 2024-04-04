const reverseString = function(text) {
    const arr = [];
    let num = text.length -1;
    for(i = 0; i < text.length; i++){
        arr[i] = text.charAt(num--);
    }
    newText = arr.join("");
    return newText;
};

// Do not edit below this line
module.exports = reverseString;
