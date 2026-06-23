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


// 8
const prices = [100, 50, 80, 450, 230, 70, 120]
const updatePrices = prices.filter(price => price >= 100).map(price => price * 1.18)
console.log(updatePrices)


// 10
const arrayDuplicate = numsArr.reduce((acc, current) => acc * current, 1)
console.log(arrayDuplicate)


// 12
const ages = [17, 20, 51, 32, 28, 70, 12, 10]
const ageAvg = ages.reduce((acc, current) => acc + current / ages.length, 0)
console.log(ageAvg)


// 14
const bigThen50 = ages.find(age => age > 50)
console.log(bigThen50)


// 16
console.log(prices.some(price => price < 0))


// 18
console.log(ages.every(age => age > 18))