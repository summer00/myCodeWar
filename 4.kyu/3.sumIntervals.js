/*
http://www.codewars.com/kata/sum-of-intervals/javascript
将一个点数组中每两个点之间的间隔求出，间隔互相不包含
 */
//mine:
function sumIntervals(intervals) {
    var start = intervals[0][0],
        end = intervals[0][1];
    return intervals.reduce(function(sum, now, i) {
        var s, e;
        if (now[0] == start && now[1] == end && i != 0) {
            console.log(now);
            return sum;
        }
        s = (now[0] > start && now[0] < end) ? end : now[0];
        e = (now[1] > start && now[1] < end) ? start : now[1];
        return s > e ? sum : sum += e - s;
    }, 0)
}
//most clever
function sumIntervals(intervals){
  var numbers = [];
  intervals.forEach( function(interval) {
    for (var i = interval[0] ; i < interval[1] ; i++) {
      if (numbers.indexOf(i) == -1) numbers.push(i);
    }
  });
  return numbers.length;
}
//others
function sumIntervals(intervals){
  return intervals
    .sort(function(a, b){
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    })
    .reduce(function(acc, interval) {
      if (interval[1] > acc.top) {
        acc.total += interval[1] - Math.max(interval[0], acc.top);
      }
      acc.top = Math.max(interval[1], acc.top);
      return acc;
    }, {total: 0, top: 0})
    .total;
}
//smailer with most clever, but use loop instead of recursion
function sumIntervals(intervals){
  var retArr = [];
  for(i=0; i<intervals.length; i++){
    for(j = intervals[i][0]+1; j<=intervals[i][1]; j++){
      if(retArr.indexOf(j) == -1) retArr.push(j);
    }  
  }
  return retArr.length;
}
sumIntervals([ [ 1, 20 ], [ 2, 19 ], [ 5, 15 ], [ 8, 12 ] ]);
/*
Description:

Write a function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals

List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:

sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); //=> returns 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); //=> returns 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); //=> returns 19
 */