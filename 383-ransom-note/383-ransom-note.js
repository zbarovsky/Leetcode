/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hash = {}
    
    for(let i = 0; i < magazine.length; i++) {
        if(hash[magazine[i]] != undefined) {
            hash[magazine[i]]++
        } else {
            hash[magazine[i]] = 1
        }
    }
    
    for(let i = 0; i < ransomNote.length; i++) {
        if(hash[ransomNote[i]] == undefined || hash[ransomNote[i]] <= 0) {
            return false
        } else {
            hash[ransomNote[i]]--
        }
    }
    
    return true
    
    
};