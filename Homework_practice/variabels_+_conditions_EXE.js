//1
// const age = 20;
// if (age > 18) {
//     console.log("adult")
// }
// else {console.log("young")};


//2
const number = 7;

number % 2 == 0 ? console.log("even") : console.log("odd")


//3
const isLoggedIn = true;

isLoggedIn ? console.log("welcome") : console.log("please login")

//4
const num = -5;

if (num < 0) {
    console.log("positive")
}
else {console.log("negative")}


//5
const a = 10;
const b = 20;

if (a === b) {
    console.log("evens")
}
else if (a > b) {
    console.log("a bigger then b")
}
else {console.log("b bigger then a")}


//6
// const password = "1234";

// password === "1234" ?  console.log("access improve") : console.log("wrong password")


//7
// const x = 15;

// if (10 < x < 20) {
//     console.log("x : between 10-20")
// }
// else {console.log("x : smaller then 10 / bigger then 20")}


//8
const grade = 83;
if (grade >= 90) {
    console.log("excellent")
}
else if (75 < grade < 89) {
    console.log("good")
}
else if (60 < grade < 74) {
    console.log("pass")
}
else {console.log("failed")}


//9
const temp = 28;

if (temp > 30) {
    console.log("very hat, drink water")
    }
else if (20 < temp < 30) {
    console.log("good whether")
    }
 else {
    console.log("could.. take jacket")
};


// 10
// const age = 20;
// const hasID = true;

// if (age > 18 && hasID) {
//     console.log("succeed")
// };


// 11
const isAdmin = false;
const isManager = true;

if (isAdmin || isManager) {
    console.log("login success")
};


// 12
const hasCard = false;

if (hasCard) {
    console.log("login success")
    }
else {
    console.log("access dined")
}


// 13
const name = "";

name ? console.log(name) : console.log("gouts")


// 14
const arr = [];

arr.length > 0 ? console.log(arr) : console.log("arr is empty")


// 15
const x = "5";
const y = 5

console.log(x == y)
console.log(x === y)


// 16
const username = "admin";
const password = "1234"

if (username && password) {
    console.log("welcome")
}
else {
    console.log("try again..")
}


// 17
const age = 67

if (age < 18) {
    console.log("Youth discount")
}
else if (age >= 65) {
    console.log("Pensioner discount")
}
else {
    console.log("No discount")
}


// 18
const day = "שני";

switch (day) {
    case "שבת" :
        console.log("סוף שבוע")
        break;
    case "ראשון" :
        console.log("תחילת שבוע חדש")
        break;
    default :
    console.log("אמצע שבוע")
}


// 19
const total = 250;
total > 300 ? console.log("free shipping") : total > 150 && total < 300 ? console.log("20 sin for shipping") : console.log("40 sin for shipping")


// 20
const role = "editor";

switch (role) {
    case "admin" :
        console.log("all access")
        break;
    case "editor" :
        console.log("edit only")
        break;
    case "viewer" :
        console.log("read only")
        break;
    default :
        console.log("no access")
}