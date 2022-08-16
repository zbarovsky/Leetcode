/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle = left + Math.floor((right - left) / 2)
    
    while(left <= right) {
        if(nums[middle] === target) {
            return middle
        } else if (nums[middle] < target) {
            left++
        } else {
            right--
        }
        middle = Math.floor((left + right) / 2)
    }
    return -1
    
};