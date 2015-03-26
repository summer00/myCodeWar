//将第一个数组和第二个数组中和为第三个数组中的元素返回
var check = function(a1, a2, a3) {
    var result = [];
    for (var i = 0, l = a1.length; i < l; i++) {
        for (var j = 0, m = a2.length; j < m; j++) {
            for (var k = 0, n = a3.length; k < n; k++) {
                if (a1[i] + a2[j] == a3[k]) {
                    result.push([a1[i], a2[j], a3[k]]);
                }
            }
        }
    }
    return result;
}
check([1,2],[4,3],[6,5,8]);
/*
Description:

What adds up

Given three arrays of integers your task is to create an algorithm that finds the numbers in the first two arrays whose sum is equal to any number in the third. The return value should be an array containing the values from the argument arrays that adds up. The sort order of the resulting array is not important. If no combination of numbers adds up return a empty array.

Example

A small example: Given the three input arrays a1 = [1, 2]; a2 = [4,3]; a3 = [6,5,8], we need to find the number pairs from a1 and a2 that sum up to a number in a3 and return those three numbers in an array. In this example, the result from the function would be [[1, 4, 5] , [2, 4, 6], [2, 3, 5]].

Given three arrays
a1      a2      a3
 1       4       6          (a1 a2 a3)    (a1 a2 a3)  (a1 a2 a3)
 2       3       5      =>  [[1, 4, 5] ,  [2, 4, 6],  [2, 3, 5]]
                 8

each value in the result array contains one part from each of the arguments.
Testing

A function compare_array is given. This function takes two arrays and compares them invariant of sort order.

Test.expect(compare_arrays(addsup([1,2], [3,1], [5,4]), [[1,3,4], [2,3,5]]))
 */