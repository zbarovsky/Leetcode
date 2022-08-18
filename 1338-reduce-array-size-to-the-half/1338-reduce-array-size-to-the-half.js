/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    
    let hash = {}
    let halfArr = arr.length / 2
    let arrLen = arr.length
    let output = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(hash[arr[i]] != undefined) {
            hash[arr[i]]++
        } else {
            hash[arr[i]] = 1
        }
    }
    
    let counts = Array.from(Object.values(hash))
    
    counts = counts.sort((a, b) => b - a)
    
    for(count in counts) {
        arrLen -= counts[count]
        output++
        if(arrLen <= halfArr) {
            return output
        }
    }
};