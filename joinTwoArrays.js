var getConcatenation = function(nums) {
    // Create a new array, double the size of nums.
   const result = new Array(nums.length * 2);
   
   // O(n) loop over every item within nums.
   for (let i=0; i < nums.length; i++) {
       // Set the first value.
       result[i] = nums[i]
       // Set the concatenated value.
       result[nums.length + i] = nums[i]
   }
   
   // Iteration complete, return the resulting array.
   return result
};