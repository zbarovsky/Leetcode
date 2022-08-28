/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {}
    
    for(let i = 0; i < s.length; i++) {
        
        if(hash[s[i]] != undefined) {
            hash[s[i]][1]++
        } else {
            hash[s[i]] = [i, 1]
        }
    }
    
    for(val in hash) {
        if(hash[val][1] === 1) {
            return hash[val][0]
        }
    }
    
    return -1
    
};