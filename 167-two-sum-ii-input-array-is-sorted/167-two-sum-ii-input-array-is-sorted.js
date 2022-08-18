/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let hash = {}
    
    for(let i = 0; i < numbers.length; i++) {
        
        let curTarget = target - numbers[i]
        
        if(hash[curTarget] != undefined) {
            
            return [hash[curTarget], i+1]
        }
        
        hash[numbers[i]] = i + 1
    }
    
};