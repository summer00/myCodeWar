//mine 使用循环
//清晰易懂
function solution(input, markers) {
    console.log(input + ' ' + markers);
    var ss = input.split('\n');
    for (var i = 0, l = ss.length; i < l; i++) {
        for (var j = 0, ll = markers.length; j < ll; j++) {
            if (ss[i].indexOf(markers[j]) != -1) {
                ss[i] = ss[i].slice(0, ss[i].indexOf(markers[j]));
            }
        }
        ss[i] = ss[i].trim();
    }
    return ss.join('\n');
}
//使用replace，用正则表达式匹配，更加简洁
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}
solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

/*Description:
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:
Given an input string of:
    apples, pears # and bananas
    grapes
    bananas !apples
The output expected would be:
    apples, pears
    grapes
    bananas
The code would be called like so:
    var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    //result should == "apples, pears\ngrapes\nbananas"
*/ 