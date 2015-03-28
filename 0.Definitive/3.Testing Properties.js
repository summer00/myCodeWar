// You can do this with the in operator, with the hasOwnProperty() and
// propertyIsEnumerable() methods, or simply by querying the property.

var o = {
	a: 1,
	b: 2
};
//不存在的
console.log('0.1--'+('c' in o));
console.log('0.2--'+(o.c !== undefined));
//自有属性
console.log('1.1--'+('a' in o));
console.log('1.2--'+o.hasOwnProperty('toString'));
console.log('1.3--'+o.propertyIsEnumerable('a'));
console.log('1.4--'+(o.a !== undefined));
//继承属性
console.log('2.1--'+('toString' in o));
console.log('2.2--'+o.hasOwnProperty('toString'));
console.log('2.3--'+o.propertyIsEnumerable('toString'));//不可枚举