/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0;
    let end = matrix.length-1
    
    let sIndex = 0;
    let eIndex = matrix[0].length-1;
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        if(matrix[mid][sIndex] <= target && matrix[mid][eIndex] >= target) {
            if(matrix[mid].includes(target)) {
                return true
            } else {
                return false
            }
        } else if(matrix[mid][sIndex] > target) {
            end-- 
        } else if(matrix[mid][eIndex] < target) {
            start++
        }
    }
    
    return false
    
    
    
};