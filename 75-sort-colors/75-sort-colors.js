/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let start = 0;
    let end = nums.length - 1
    let cur = 0;
    
    while(cur <= end) {
        if(nums[cur] == 0) {
            [nums[start], nums[cur]] = [nums[cur], nums[start]]
            start++
            cur++
        } else if (nums[cur] == 2) {
            [nums[cur], nums[end]] = [nums[end], nums[cur]]
            end--
        } else {
            cur++
        }
    }
    
};