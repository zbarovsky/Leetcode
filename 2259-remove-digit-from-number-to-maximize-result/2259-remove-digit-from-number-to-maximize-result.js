/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let maxOutput = 0;
    
    for(let i = 0; i < number.length; i++) {
        
        if(number[i] == digit) {
            let tString = number.slice(0, i) + number.slice(i+1)
            if(tString > maxOutput) {
                maxOutput = tString
            }
        }
        
    }
    
    return maxOutput
};