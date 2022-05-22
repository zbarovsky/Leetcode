/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    helper(0, s.length -1, s)
};

function helper(start, end, s) {
    if(start >= end) {
        return;
    }
    
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    helper(start + 1, end - 1, s)
}