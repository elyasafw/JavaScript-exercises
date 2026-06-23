// 1
// const numsArr = [1, 2, 3, 4, 5]
// const double = numsArr.map(num => num * 2)
// console.log(double)


// 2
const textsArr = ["hello", "world"];
const upperTexts = textsArr.map(word => word.toUpperCase());
console.log(upperTexts);


// 4
const numsArr = [1, 2, 3, 4, 5, 6];
const evensNums = numsArr.filter(num => num % 2 === 0);
console.log(evensNums);


// 6
const users = [{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }];
const adultUsers = users.filter(user => user.age > 18);
console.log(adultUsers);


// 8
const prices = [100, 50, 80, 450, 230, 70, 120];
const updatePrices = prices.filter(price => price >= 100).map(price => price * 1.18);
console.log(updatePrices);


// 10
const arrayDuplicate = numsArr.reduce((acc, current) => acc * current, 1);
console.log(arrayDuplicate);


// 12
const ages = [17, 20, 51, 32, 28, 70, 12, 10];
const ageAvg = ages.reduce((acc, current) => acc + current / ages.length, 0);
console.log(ageAvg);


// 14
const bigThen50 = ages.find(age => age > 50);
console.log(bigThen50);


// 16
console.log(prices.some(price => price < 0));


// 18
console.log(ages.every(age => age > 18));


// 20
console.log(prices.indexOf(80));


// 21
console.log(prices.includes(35));


// 25
const revers = ages.reverse();
console.log(revers);


// 29
const spliceArray = prices.slice(2, 5);
console.log(spliceArray);


// 32
const arr = [
    1, 2, [
        3, 4, [
            5, 6]
        ]
    ];
console.log(arr.flat(Infinity));


// 36
const chaining =
ages.filter(age => age % 2 === 0).
    map(age => age *2).
        reduce((acc, current) => acc + current, 0)
console.log(chaining)


// 38
const items = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
const grouped = items.reduce((acc, current) => {
    const key = current.type;
    if (!acc[key]) {
        acc[key] = [];
        }
    acc[key].push(current);
    return acc;
}, {});
console.log(grouped);


// 39
const doubleArr = [1, 4, 6, 6, 8, 2]
const duplicate = doubleArr.some((current, index) => {
    return doubleArr.indexOf(current) !== index
})
console.log(duplicate)


// 41
const products = [
  { name: "Laptop", price: 800, inStock: true,  category: "tech"    },
  { name: "Phone",  price: 400, inStock: false, category: "tech"    },
  { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" }
];

const filtering = products.filter(product => product.inStock)
    .filter(product => product.price > 100)
        .sort((low, high) => low - high)
            .map(product => product.name)
                .join(" ")
console.log(filtering)