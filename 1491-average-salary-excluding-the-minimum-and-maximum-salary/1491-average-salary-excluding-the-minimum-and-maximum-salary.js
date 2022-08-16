/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sort = salary.sort((a,b) => a - b)
    let sum = 0;
    let salaries = salary.length - 2
    
    for(let i = 1; i < sort.length - 1; i++) {
        sum += sort[i]
    }
    
    return sum / salaries
    
    
};