public class Solution {
    public int MinimumDeletions(string s) {
        int output = 0;
        Stack<char> stack = new Stack<char>();
        
        if(s.Length <= 1) 
        {
            return output;
        }
        
        for(int i = 0; i < s.Length; i++) {
            if(stack.Count != 0 && stack.Peek() == 'b' && s[i] == 'a') {
                output++;
                stack.Pop();
            } 
            else {
                stack.Push(s[i]);
            }
        }
        
        return output;
    }
}