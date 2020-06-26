// 扩展运算符
// function foo (a, b, c) {
//   console.log(a, b, c);
// }
// let arr = [1, 2, 3]
// foo(...arr)
// function foo (x, y, z) {
//   let sum = 0
//   Array.prototype.forEach.call(arguments, function (item) {
//     sum += item
//   })
//   return sum
// }
// console.log(foo(1, 2))
// console.log(foo(1, 2, 3))

function foo (...args) {
  console.log('foo -> args', args)
  let sum = 0
  args.forEach(function (item) {
    sum += item
  })
  return sum
}
console.log(foo(1, 2))
console.log(foo(1, 2, 3))
