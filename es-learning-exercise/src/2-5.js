let arr2 = [1, 2, 3, 4, 2, 3]
let res = arr2.reduce(function (prev, cur, index, arr) {
    prev.indexOf(cur) == -1 && prev.push(cur)
    return prev
}, [])
console.log('res', res)
