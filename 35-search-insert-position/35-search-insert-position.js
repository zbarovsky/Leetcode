/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    
    if(target > nums[end]) {
        return end + 1;
    } else if (target < nums[start]) {
        return 0;
    }
    
    while(start <= end) {
        mid = Math.floor((end + start) / 2);
        //console.log(start, mid, end)
        if(nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    
    //console.log(nums[mid], mid)
    
    if (nums[mid] < target) {
        return mid += 1
    } else {
        return mid
    }
    
};