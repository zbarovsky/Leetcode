public class Solution {
    public string ReverseWords(string s) {
        StringBuilder reversedString = new StringBuilder();
        string[] splitString = s.Split(" ", StringSplitOptions.RemoveEmptyEntries);
        
        for(int i = splitString.Length - 1; i >= 0; i--) {
                reversedString.Append(splitString[i] + " ");
            }
        
        string output = reversedString.ToString();
        return output.Trim();
    }
}