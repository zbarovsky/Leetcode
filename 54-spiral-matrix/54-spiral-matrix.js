/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let output = [];
    
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let top = 0
    
    let direction = "right"
    
    while(left <= right && top <= bottom) {
        
        // left -> right
        if(direction == "right") {
            for(let i = left; i <= right; i++) {
                output.push(matrix[top][i])
            }
            direction = "down";
            top++;
        }
        
        // up -> down
        else if(direction == "down") {
            for(let i = top; i <= bottom; i++) {
                output.push(matrix[i][right])
            }
            direction = "left";
            right--;
            
        }
        
        //right -> left (aka backwards)
        else if(direction == "left") {
            for(let i = right; i >= left; i--) {
                output.push(matrix[bottom][i])
            }
            direction = "up";
            bottom--;
        }
        
        //down -> up
        else if (direction == "up") {
            for(let i = bottom; i >= top; i--) {
                output.push(matrix[i][left])
            }
            direction = "right";
            left++;;
        }
    }
    return output;
    
};