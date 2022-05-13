/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let output = [];
    
    if(n % 2 == 0) {
        for(let i = 0; i < n; i++) {
            let num;
            if(i % 2 == 0) {
                num = -i - 1
                output.push(num)
            } else {
                num = i
                output.push(num)
            }
        }
    } else {
        for(let i = 0; i < n; i++) {
            let num;
            if(i % 2 == 0) {
                num = i
                output.push(num)
            } else {
                num = -i - 1
                output.push(num)
            }
        }
    }
    return output
    
};