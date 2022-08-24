/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let hash = {}
    let count = 0;
    let length = 0;
    
    let i = 0;
    let j = 0;
    
    while(i < s.length) {
        if(hash[s[i]] != undefined) {
            if(length > count) {
                count = length
            }
            hash = {}
            i = j;
            j++
            length = 0;
        } else {
            hash[s[i]] = i
            length++
            i++
        }
    }
    
    if(length > count) {
        count = length
    }
    
    return count
    
};