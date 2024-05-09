const palindromes = function (string) {
    let word = string.toLowerCase().split('');
    for(let i = 0; i < word.length; i++){
        if(word[i] == ' '){
            word.splice(i, 1);
        }}
    for(let i = 0; i < word.length; i++){
        if((word[i].charCodeAt() < 48 || word[i].charCodeAt() > 57) && (word[i].charCodeAt() < 97 || word[i].charCodeAt() > 122)){
            word.splice(i, 1);
        }
    }
    let newString = word.join('');
    let reverseWord = word.reverse().join('');
if(newString === reverseWord)
    return true;
else
    return false;
};

// Do not edit below this line
module.exports = palindromes;
