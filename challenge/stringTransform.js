function stringTransform(input) {
    const length = input.length;

    // Helper function to reverse a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Helper function to convert string to ASCII codes
    function toAsciiCodes(str) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (length % 15 === 0) {
        // If length is divisible by 15, reverse and then replace with ASCII codes
        return toAsciiCodes(reverseString(input));
    } else if (length % 3 === 0) {
        // If length is divisible by 3, reverse the string
        return reverseString(input);
    } else if (length % 5 === 0) {
        // If length is divisible by 5, replace each character with its ASCII code
        return toAsciiCodes(input);
    } else {
        // If none of the conditions match, return the original string
        return input;
    }
}

// Example usage:
console.log(stringTransform("Hamburger")); // Output: "regrubmaH"
console.log(stringTransform("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransform("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
