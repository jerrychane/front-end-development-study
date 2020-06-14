// function foo (a = b, b = 2) {
//     console.log(a, b)
// }
// foo()
// for (let i = 0; i < 3; i++) {
//     console.log('循环内:' + i)
// }
// console.log('循环外:' + i)
// if (false) {
//     let a = 5
// }
// console.log('a', a)
for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j)
        })
    })(i)
}
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    })
} 