/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let output = []
    output.push(1)
    
    for(let i = 0; i < rowIndex; i++) {
        
        for(let j = i; j > 0; j--) {
            // sets inner numbers
            output[j] += output[j - 1]
        }
        // covers 0 and rowIndex which is always 1
        output.push(1)
    }
    return output;
};