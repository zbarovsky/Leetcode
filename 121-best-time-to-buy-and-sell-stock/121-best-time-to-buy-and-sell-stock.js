/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0];
    let lowInt = 0;
    
    let high = prices[0];
    let highInt = 0;
    
    let total = 0;
    
    for(let i = 0; i < prices.length; i++) {
        
        if(prices[i] < low) {
            low = prices[i];
            lowInt = i
            
            if(i > highInt) {
                high = 0;
            }
        } else if(prices[i] > high) {
            high = prices[i]
            highInt = i
        }
        
        let tempTotal = high - low;
        
        if(tempTotal > total) {
            total = tempTotal
        }
        
    }
    return total
};