/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    
    if(nums.includes(0)) {
        return 0
    }
    
    let negCount = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            negCount++
        }
    }
    
    if(negCount % 2 == 0) {
        return 1
    }
    
    return -1
};