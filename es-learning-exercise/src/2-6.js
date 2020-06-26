// function foo(x,y='world') {
//   // y = y || 'world'
//   console.log(x,y);
// }
// foo('hello',0)
// function foo (y = x) {
//   let x = 2
//   console.log(y);
// }
// foo()
function foo (x, y) {
  console.log(this, x, y);
}
foo.bind({ name: 'jerrychane' }, 1, 2)()
foo.bind({ name: 'jerrychane' })(1, 2)