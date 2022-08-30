/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    
    let hash = {}
    let distance = 0;
    
    for(let i = 0; i < wordsDict.length; i++) {
        if(wordsDict[i] === word1 || wordsDict[i] === word2) {
            hash[wordsDict[i]] = i
            if(hash[word1] != undefined && hash[word2] != undefined) {
                let minDist = 0;
                if(hash[word1] > hash[word2]) {
                    minDist = hash[word1] - hash[word2]
                } else {
                    minDist = hash[word2] - hash[word1]
                }
                
                if(distance == 0) {
                    distance = minDist
                } else {
                    if(minDist < distance) {
                        distance = minDist
                    }
                }
            }
        }
    }
    
    return distance
    
};