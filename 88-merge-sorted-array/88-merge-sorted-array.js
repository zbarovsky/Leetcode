/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n === 0) {
        return
    }
    
    while(nums2.length > 0) {
        let numToAdd = nums2.shift();
        //console.log(numToAdd)
        
        for(let i = 0; i < nums1.length; i++) {
            if(nums1[i] === 0) {
                nums1.splice(i, 1, numToAdd)
                break;
            }
        }
    }
    
    nums1.sort((a, b) => a - b)
    
    
};