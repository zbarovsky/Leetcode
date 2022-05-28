/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    let sortedInterval = intervals.sort((a, b) => a[0] - b[0])
    //console.log(sortedInterval)
    
    for(let i = 0; i < sortedInterval.length - 1; i++) {
        let endTime = sortedInterval[i][1]
        console.log(endTime)
        let nextStartTime = sortedInterval[i+1][0]
        if(nextStartTime < endTime) {
            return false
        }
    }
    return true
};