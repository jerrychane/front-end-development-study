// let [a, b, [c, d]] = [1, 2, [3, 4]]
// console.log(a, b, c, d);
let { name, age = 30 } = {
    name: 'jerrychane',
    // age: 18
}
// console.log(name, age);
let json = '{"a": "hello","b": "world"}'
let { a, b } = JSON.parse(json)
console.log(a, b);