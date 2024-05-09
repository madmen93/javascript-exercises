/* const fibonacci = function(num) {
    let array = [0, 1];
    for(let i = 2; i <= num; i++){
        array[i] = array[(i-2)] + array[(i-1)];
    }
    return array[num];
};
 */
const fibonacci = function(num) {
    let array = [0, 1];
    if(num >= 0){
        for(let i = 2; i <= num; i++){
            array.push((array[(i-2)]+array[(i-1)]))
        }
        return array[num];
    }else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
