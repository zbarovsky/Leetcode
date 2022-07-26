/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = ""
    
    if(strs.length < 1) {
        return output
    }  else if (strs.length === 1) {
        output = strs[0]
        return output
    } else if (strs[0][0] != strs[1][0]) {
        return output
    } else if (strs[0].length < 1) {
        return output;
    }
    
    for(let i = 0; i < strs[0].length; i++) {
        let curBit = strs[0].charCodeAt(i);
        let currentLetter = strs[0][i]
        let toBeAppended = false;
        
        for(let j = 1; j < strs.length; j++) {
            if(strs[j].length < 1) {
                return "";
            }
            
            let bitToCompare = strs[j].charCodeAt(i)
            
            if(isNaN(bitToCompare)) {
                toBeAppended = false;
                break;
            }
            
            if(curBit == bitToCompare) {
                toBeAppended = true;
            } else {
                toBeAppended = false;
                break;
            }
        }
        
        if(toBeAppended) {
            output = output.concat(currentLetter)
        } else {
            return output
        }
    }
    return output
};