/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}
    
    for(let i = 0; i < nums.length; i++) {
        let toBeSearched = target - nums[i];
        if(hash[toBeSearched] != undefined) {
            return [hash[toBeSearched], i]
        } else {
            hash[nums[i]] = i
        }
    }
};