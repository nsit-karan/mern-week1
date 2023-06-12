
/*
 * Leetcode268
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

 */
var missingNumber = function(nums) {
    let b = [];
    let missingIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        b[nums[i]] = 1;
    }

    for (let i = 0; i <= b.length; i++) {
        if (b[i] != 1) {
            missingIndex = i;
            break;
        }
    }

    return missingIndex;
}

/**
 * Approach :
 * take another array 'b' which will only have 1 and 0
 * 
 * Iterate over all the elements. For every element:
 *   - set 1 in b , i.e, b[a[i]] = 1
 * 
 * After a is iterated, find the index in b which is zero
 * which will be your answer
 * 
 */
arr = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(arr));

/**
 * The above is a unoptimal solution and will work if nums.len is reasonably small
 * for super large values, it is going to be a costly solution (iterate twice, double the memory)
 * 
 * Better solution:
 * Find the expected sum , i.e sum of nos from 1 to nums.len since all nums are expected to be there
 * Now keep subtracted nums[i] from the sum and the value left is your missing number
 * 
 * This approach uses the problem constraint better
 */