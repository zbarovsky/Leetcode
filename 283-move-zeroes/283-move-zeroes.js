/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let counter = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i,1)
            counter++
            i--
        }
    }
    
    for(let i = 0; i < counter; i++) {
        nums.splice(nums.length, 0, 0)
    }
};