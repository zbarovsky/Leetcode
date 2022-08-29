/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    if(digits[digits.length - 1] == 9) {
        for(let i = digits.length - 1; i >= 0; i--) {
            if(digits[i] < 9) {
                digits[i]++
                return digits
            } else if (digits[i] === 9) {
                digits[i] = 0
            }
            if(i === 0) {
                digits.unshift(1)
            }
        }
    } else {
        digits[digits.length - 1]++
    }
    
    return digits
    
};