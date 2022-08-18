/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    
    let sizeArr = []
    let count = 0;
    let output = 0;
    let halfArr = arr.length / 2
    let arrLen = arr.length
    
    arr = arr.sort((a,b) => a - b)
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            count++
        } else {
            count++
            sizeArr.push(count)
            count = 0
        }
    }
    
    sizeArr = sizeArr.sort((a,b) => b - a)
    
    for(let i = 0; i < sizeArr.length; i++) {
        arrLen -= sizeArr[i]
        output++
        if(arrLen <= halfArr) {
            return output
        }
    }
    
    return output
    
};