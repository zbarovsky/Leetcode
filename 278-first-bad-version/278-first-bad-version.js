/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    //console.log(isBadVersion(4))
    
    return function firstBadVersion(n) {
        let start = 1;
        let end = n;
        
        while(start < end) {
            let mid = start + Math.floor((end - start) / 2);
            if(isBadVersion(mid) === true) {
                end = mid;
            } else {
                start = mid + 1
            }
        }
        return start
    }
    
};