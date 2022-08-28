/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let queue = []
    let length;
    let hash = {}
    
    for(let i = 0; i < s.length; i++) {
        
        if(hash[s[i]] != undefined) {
            hash[s[i]][1]++
        } else {
            hash[s[i]] = [i, 1]
        }
        
        queue.push(s[i])
    }
    
    length = queue.length
    
    for(let i = 0; i < length; i++) {
        let dequeued = queue.shift();
        if(hash[dequeued][1] === 1) {
            return hash[dequeued][0]
        }
    }
    
    return -1
    
};