function SubArray(arr, target) {
    // Initialize start pointer and currentSum
    let start = 0;
    let currentSum = 0;
    
    // Iterate through the array with the end pointer
    for (let end = 0; end < arr.length; end++) {
        // Add the current element to currentSum
        currentSum += arr[end];
        
        // While currentSum is greater than target, move the start pointer to the right
        // and subtract the element at the start pointer from currentSum
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        // Check if the currentSum is equal to the target
        if (currentSum === target) {
            return true; // Found a subarray with the target sum
        }
    }
    
    return false; // No subarray with the target sum found
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(SubArray(arr, target));  // Output: true
