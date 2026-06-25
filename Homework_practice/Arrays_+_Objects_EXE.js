// 1
const numbers = [1, 2, 3];
console.log(numbers);


// 2
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0])
console.log(fruits[fruits.length -1])


// 3
fruits[1] = "mango"
console.log(fruits)


// 4
console.log(fruits.push("orange"))
console.log(fruits)


// 5
console.log(fruits.pop())
console.log(fruits)


// 6
fruits.unshift("kiwi")
console.log(fruits)


// 7
fruits.shift()
console.log(fruits)


// 8
const arr = ["a", "b", "c", "d"]
arr.splice(1, 1)
console.log(arr)


// 9
arr.splice(1, 0, "x")
console.log(arr)


// 10
arr.splice(2, 1, "y")
console.log(arr)


// 11
const numsArray = [1, 2, 4, 7, 9, 40, 20, 3]
console.log(numsArray.length)
console.log(numsArray[numsArray.length -1])


// 12
const array = [28, "david", true]
for (let i of array) console.log(i);


// 13
const nums = [10, 20, 30]
for (let n = 0; n < nums.length; n++) {
    console.log(nums[n])
};


// 14
console.log(nums.reduce((acc, current) => acc + current));


// 15
const numbersArr = [3, 8, 12, 1]
for (let n of numbersArr) {
    if (n > 5) {
        console.log(n)
    };
};


// 16
const person = {
    name: "dan",
    age: 25
};
console.log(person)


// 17
console.log(person.name, person.age)
console.log(person["name"], person["age"])


// 18
person.city = "tel aviv"
person.name = "yoni"
console.log(person)


// 19
delete person.age
console.log(person.age in person)


// 20
const student = {
    name: "Yael",
    grades: [90, 80, 100]
};
console.log(student.grades[0])
student.grades.push(95)
student.grades.splice(1, 1)
console.log(student.grades)


// 21
const product = {
    name: "Laptop",
    price: 3500,
    inStock: true
};
for (let key in product) {
    console.log(`${key}: ${product[key]}`)
};