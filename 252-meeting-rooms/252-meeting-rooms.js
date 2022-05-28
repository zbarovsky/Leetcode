/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    
    for(let i = 0; i < intervals.length; i++) {
        let startTime = intervals[i][0]
        let endTime = intervals[i][1]
        
        for(let j = i+1; j < intervals.length; j++) {
            if(intervals[j][0] >= startTime && intervals[j][0] < endTime) {
                return false
            }
            else if(intervals[j][1] > startTime && intervals[j][1] <= endTime) {
                return false
            } else if (intervals[j][0] < startTime && intervals[j][1] > endTime) {
                return false
            }
        }
    }
    return true
};