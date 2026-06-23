// 1
// const numsArr = [1, 2, 3, 4, 5]
// const double = numsArr.map(num => num * 2)
// console.log(double)


// 2
const textsArr = ["hello", "world"]
const upperTexts = textsArr.map(word => word.toUpperCase())
console.log(upperTexts)


// 4
const numsArr = [1, 2, 3, 4, 5, 6]
const evensNums = numsArr.filter(num => num % 2 === 0)
console.log(evensNums)


// 6
const users = [{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }]
const adultUsers = users.filter(user => user.age > 18)
console.log(adultUsers)