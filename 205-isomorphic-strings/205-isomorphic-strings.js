/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hash = {}
    
    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]] === undefined) {
            if(Object.values(hash).includes(t[i])) {
                return false
            } else {
                hash[s[i]] = t[i]
            }
        } else {
            if(hash[s[i]] != t[i]) {
                return false;
            }
        }
    }
    
    return true;
    
    
};