/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let cache = {}
    
    if(cache[n] != undefined) {
        return cache[n]
    } else {
        cache[n] = n
    }
    
    if(n < 2) return n;
    
    return fib(n - 1) + fib(n - 2);
};