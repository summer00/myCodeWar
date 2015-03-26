//返回所有奇数，使用filter
function noOdds(values) {
    var non = [];
    for (var i = 0, l = values.length; i < l; i++) {
        if (values[i] % 2 == 0) non.push(values[i]);
    }
    return non;
}

function noOdds(values) {
    function isEven(number) {
        return number % 2 == 0;
    }
    return values.filter(isEven);
}
/*
Description:

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values )
 */