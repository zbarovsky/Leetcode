/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let triangle = []
    
    for(let i = 0; i <= rowIndex; i++) {
        let row = []
        row[0] = 1
        row[i] = 1
        
        for(let j = 1; j < row.length - 1; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j] 
        }
        
        triangle.push(row)
        if(i == rowIndex) {
            return row
        }
    }
};