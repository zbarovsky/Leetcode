/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let order = [];
    let output = [];
    let counts = [
        {letter: "a", count: a},
        {letter: "b", count: b},
        {letter: "c", count: c}
    ]
    
    let sortedCount = counts.sort((c1, c2) => (c1.count < c2.count) ? 1 : (c1.count > c2.count) ? -1 : 0 );
    //console.log(sortedCount)
    
    let i = 0;
    while(i < sortedCount.length) {
        //console.log(sortedCount[0].count - sortedCount[i].count)
        let lastLetter = output[output.length -1]
        for(let k = 0; k < 2; k++) {
            if(sortedCount[i].count > 0) {
                if(sortedCount[0].count - sortedCount[i].count >= 1) {
                    output.push(sortedCount[i].letter);
                    sortedCount[i].count = sortedCount[i].count -1;
                    break;
               } else {
                    output.push(sortedCount[i].letter);
                    sortedCount[i].count = sortedCount[i].count -1;
                }
            } else {
                break;
            }
        }
        
        if (sortedCount[0].count > sortedCount[i].count && output[output.length -1] != sortedCount[0].letter) {
            sortedCount = counts.sort((c1, c2) => (c1.count < c2.count) ? 1 : (c1.count > c2.count) ? -1 : 0 );
            
            i = 0;
        } else if (i == 2 && sortedCount[0].count > 1 && sortedCount[0].letter != lastLetter) {
            i = 0    
        }  else {
            i++
        }
    }
    return output.join("")

};
