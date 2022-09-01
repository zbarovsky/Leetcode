/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    
    while(start <= end) {
        if(nums[start] === target) {
            return start
        } else if (nums[end] === target) {
            return end
        } else {
            start++
            end--
        }
    }
    
    return -1
};