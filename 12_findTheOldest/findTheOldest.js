const findTheOldest = function(arr) {
    return arr.reduce((oldest, currentperson) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentAge = getAge(currentperson.yearOfDeath, currentperson.yearOfBirth);
        return oldestAge < currentAge ? currentperson : oldest;
    })
};

const getAge = function(death, birth){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
