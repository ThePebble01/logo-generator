# Logo Generator

## Credit

REGEX For HEX Colors - https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/
// Javascript program to validate
// Hexadecimal Color Code using Regular Expression

// Function to validate the
// hexadecimalColor_code
function isValidHexaCode(str) {
// Regex to check valid
// hexadecimalColor_code
let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

    // if str
    // is empty return false
    if (str == null) {
    	return "false";
    }

    // Return true if the str
    // matched the ReGex
    if (regex.test(str) == true) {
    	return "true";
    }
    else {
    	return "false";
    }

}

// Driver Code
// Test Case 1:
let str1 = "#1AFFa1";
console.log(isValidHexaCode(str1));

// Test Case 2:
let str2 = "#F00";
console.log(isValidHexaCode(str2));

// Test Case 3:
let str3 = "123456";
console.log(isValidHexaCode(str3));

// Test Case 4:
let str4 = "#123abce";
console.log(isValidHexaCode(str4));

// Test Case 5:
let str5 = "#afafah";
console.log(isValidHexaCode(str5));

// This code is contributed by Rahul Chauhan
