/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product;
    let sum = 0;
    
    n = n.toString();
    
    for(let i = 0; i < n.length; i++) {
        sum += parseInt(n[i])
        
        if(i === 0) {
            product = n[i]
        } else {
            product *= n[i]
        }
        
    }
    
    return product - sum
    
};