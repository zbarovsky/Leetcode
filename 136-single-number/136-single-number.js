/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {}
    
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] != undefined) {
            hash[nums[i]]++
        } else {
            hash[nums[i]] = 1
        }
    }
    
    for(num in hash) {
        if(hash[num] === 1) {
            return num
        } 
    }
};