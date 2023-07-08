const removeFromArray = function(array, ...args) {
    const resultArray = [];

    array.forEach((num) => {
        if (!args.includes(num)) {
            resultArray.push(num);
        }
    });

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
