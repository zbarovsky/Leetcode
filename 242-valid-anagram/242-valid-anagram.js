/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s === null || t === null) {
        return false
    }
    
    if (s.length != t.length) {
        return false;
    }
    
    let sortS = s.split("").sort();
    let sortT = t.split("").sort();
    
    for(let i = 0; i < sortS.length; i++) {
        if(sortS[i] != sortT[i]) {
            return false;
        }
    }
    return true;
};