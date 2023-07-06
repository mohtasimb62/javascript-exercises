const reverseString = function(inputString) {
    let result = "";
    stringLength = inputString.length - 1; 
    while (stringLength >= 0) {
        result += inputString.charAt(stringLength);
        stringLength--;
    }
    return result;

    // return inputString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
