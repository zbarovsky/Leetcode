/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let output = []
    let fizzBuzz = ""
    
    for(let i = 1; i <= n; i++) {
        
        if(i % 3 == 0) {
            fizzBuzz += "Fizz"
        }
        
        if(i % 5 == 0) {
            fizzBuzz += "Buzz"
        }
        
        if(fizzBuzz.length > 1) {
            output.push(fizzBuzz)
        } else {
            output.push(i.toString())
        }
        
        fizzBuzz = ""
    }
    
    return output;
    
};