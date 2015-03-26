/**
 *   say 'Hello' to people who call this function
 *   @param  {String}   name 
 *   @return {String}   欢迎语
 *   @create 2015-03-26
 *   @update 2015-03-26
 */
var greet = function(name) {
	return 'Hello ' + name[0].toUpperCase() + name.slice(1, name.length).toLowerCase() + '!';
};
console.log(greet('xia'));

/*
创建了一个String的内部方法
 */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};