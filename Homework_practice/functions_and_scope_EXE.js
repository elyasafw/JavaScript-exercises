// 1
function hello(name) {
    console.log(`hello ${name}`)
};


// 2
const calculator = (num1, num2) => num1 + num2;
console.log(calculator(5, 10))


// 3
function even(number) {
    console.log(number % 2 == 0)
};
even(8)


// 4
const FirstItem = (arr) => console.log(arr[0])
FirstItem([4, 7, 20, 45])


// 5
function uppercase(text) {
    return text.toUpperCase()
}
console.log(uppercase("elyasaf"))


// 6
"יודפס 10 ואז 5 כי השמנו משתנה X חדש בתוך הפונקציה"


// 7
"לא הגדרנו את Y"
// let y
// function test() {
//     y = 10;
// }
// test();
// console.log(y);


// 8
"2"


// 9
// function a() {
//     function b() {
//         let y = 10
//     };
//     b()
//     console.log(y)
// };
// a()


// 10
let count = 0;
function add() {
    let count = 1
    count++;
};


// 11
const arr = [1, 2, 3, 4, 5]
function sum(arr) {
    let count = 0
    for (let n of arr) {
        count += n
    };
    return count
};
console.log(sum(arr));


// 12
const square = (number) => number**2
function printSquare () {
    console.log(square(5))
}
printSquare()


// 13
"10"


// 14
const arry = [1, 2, 3, 4, 5, 6, 7, 8, 10]
function evensArr (arr) {
    let evens = []
    for (let n of arr) {
        if (n % 2 == 0) {
            evens.push(n)
        };
    }
    return evens
}
console.log(evensArr(arry))


// 15
"אין כרגע בעיה"