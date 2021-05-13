var Car = function(color) {
  // construtor == Car 构造函数和初始化的类相同
  console.log('1111')
  this.color = color;
}
Car.prototype.sail = function() {
  console.log(this.color + "sell for 13w")
}
var BMW = function(color) {
  Car.call(this,color)
}
// 按引用传递
// 1.拿到父类原型链上的方法
// 2.不能让构造函数执行2遍
// 3.引用的原型链不能是按值引用

// 4.修正子类的 contructor
var __pro = Object.create(Car.prototype);
__pro.constructor = BMW;
BMW.prototype = __pro;
// BMW.prototype = new Car(); // 子类的构造函数指向了父类 Car,且构造函数执行了2遍
var m = new BMW('red');
console.log(m);
// var s = new Car('red');
// console.log(s);