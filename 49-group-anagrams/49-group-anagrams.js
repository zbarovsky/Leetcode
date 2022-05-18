/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let output = []
    let hash = {}
    
    if(strs.length <= 1) {
        return [strs]
    }
    
    for(let i = 0; i < strs.length; i++) {
        let splitStr = strs[i].split("").sort()
        
        if(hash[splitStr] != undefined) {
            hash[splitStr].push(strs[i])
        } else {
            hash[splitStr] = [strs[i]]
        }
        
    }
    
    for(str in hash) {
        output.push(hash[str])
    }
    
    return output
    
    
    
};