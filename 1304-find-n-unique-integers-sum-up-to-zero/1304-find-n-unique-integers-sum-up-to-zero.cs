public class Solution {
    public int[] SumZero(int n) {
        List<int> output = new List<int>();
        double loopSize = Math.Floor((double)n/2) +1;
        
        for(int i = 1; i < loopSize; i++) {
            output.Add(i);
            output.Add(-i);
        }
        if(n % 2 != 0) {
            output.Add(0);
        }
        return output.ToArray();
    }
}