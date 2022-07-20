/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    if(n === 1) {
        return true
    }
    
    let cache = {}
    
    while(n != 1) {
        
        let stringify = n.toString().split("");
        let sum = 0;
        
        stringify.forEach(num => {
            let parsed = parseInt(num);
            let squared = Math.pow(num, 2);
            sum += squared
        })
        n = sum
        
        if(cache[n] != undefined) {
            return false
        } else {
            cache[n] = n
        }
        
    }
    return true  
};