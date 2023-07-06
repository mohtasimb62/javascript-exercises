const repeatString = function (text, num) {
    let result = "";
    if (num < 0) return "ERROR";
    else {
        while (num > 0) {
            result += text;
            num--;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
