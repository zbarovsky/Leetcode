/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let output = [];
    
    for(let i = 1; i < Math.floor(n/2)+1; i++) {
        output.push(i);
        
        output.push(-i);
    }
    
    if(n % 2 != 0) {
        output.push(0)
    }
    return output
    
};