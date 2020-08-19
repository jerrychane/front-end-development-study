const stu1 = Symbol('李四')
const stu2 = Symbol('李四')
const grade = {
  [stu1]: {address:'yyy',tel:'222'},
  [stu2]: {address:'xxx',tel:'333'}
}
console.log(grade)