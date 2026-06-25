// import input from 'analiza-sync'

//1
for (let n = 1; n < 11; n++) {
    console.log(n)
}


//2
for (let n = 10; n > 0; n--) {
    console.log(n)
}


//3
// const numbers = [1, 2, 3, 4, 5];

// var count = 0

// for (n of numbers) {
//     count += n
// };
// console.log(count)


//4
const names = ["דנה", "יוסי", "מיכל", "רון"];

for (let name of names) {
    console.log(name)
};


//5
// const numbers = [2, 5, 8, 11, 14, 17, 20];

// for (n of numbers) {
//     if (n % 2 == 0) {
//         console.log(n)
//     }
// }


//6
// const numbers = [3, 99, 12, 45, 78];

// var max_num = 0
// for (n of numbers) {
//     if (max_num < n) {
//         var max_num = n
//     }
// }
// console.log(max_num)


// 7
// const word = "javascript";

// for (const letter of word) {
//     console.log(letter)
// };


// 8
// const numbers = [1, 2, 3, 4];

// for (n of numbers) {
//     console.log(n * 2)
// };


// 9
let n = 1;
while (n < 11) {
    console.log(n)
    n++
};


// 10
// "אין שרת ריצה לאינפוט"


// 11
// "אין שרת ריצה לאינפוט"


// 12
// "אין שרת ריצה לאינפוט"


// 13
let x = 1;

while (x < 20) {
    console.log(x)
    x++
};


// 14
// "אין שרת ריצה לאינפוט"


// 15
let count = 0;
do {
    console.log(count)
} while (count > 0){
};


// 16
// "אין שרת ריצה לאינפוט"


// 17
// const numbers = [1, 3, 7, 9, 15, 2];

// for (n of numbers) {
//     if (n > 10) {
//         break
//     }
// }


// 18
// const numbers = [5, -1, 8, -3, 10];

// for (n of numbers) {
//     if (n % 2 != 0) {
//         continue
//     }
//     console.log(n)
// }


// 19
const ages = [12, 15, 18, 21, 25];

for (let age of ages) {
    if (age >= 18) {
        console.log(age)
        break;
    }
}


// 20
const arr = [10, 20, 30, 40, 50];

for (const a of arr) {
    console.log(a)
};


// 21
// const numbers = [1, 2, 3, 4, 5, 6];

// let evens = 0
// for (let n of numbers) {
//     if (n % 2 == 0) {
//         evens += n
//     }
// }
// console.log(evens)


// 22
const target = 25;
const numbers = [10, 15, 20, 25, 30];

for (let n of numbers) {
    if (n === target) {
   console.log("true:", n)
   break;
    }
}


// 23
const word = "hello world";

for (let l of word) {
    console.log(l.toUpperCase())
}