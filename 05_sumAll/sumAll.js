const sumAll = function(a, b) {
    let sum = 0;
    let errorMsg = "ERROR";
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    if (a < 0 || b < 0) return errorMsg;

    if (typeof a != "number" || typeof b != "number") return errorMsg;
    
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
