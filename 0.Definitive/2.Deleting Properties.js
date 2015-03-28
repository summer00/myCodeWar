//删除o的a属性只是断开了o与a的联系，对其的应用一直存在
var o = {
	a: {
		i: 2,
		j: 3
	},
	b: 2,
	c: 3
};
var oo = o.a;
delete o.a;
console.log(oo);

//删除全局的变量属性
this.x = 1; // Create a configurable global property (no var)
console.log(this.x);
delete this.x; // And delete it
console.log(this.x);