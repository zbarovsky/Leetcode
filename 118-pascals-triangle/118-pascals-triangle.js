/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = []
    
    for(let i = 0; i < numRows; i++) {
        let row = []
        row[0] = 1
        row[i] = 1
        
        for(let j = 1; j < row.length - 1; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
        }
        
        triangle.push(row)
    }
    return triangle
};