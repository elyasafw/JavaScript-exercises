// 1
const createName = (name, age = 0) => ({
    name,
    age,
    greet: () => `Hi I am ${name}`,
    is_adult: () => age > 18
})
const dana = createName("dana")


// 2
console.log(dana.greet())


// 3
const avi = createName("avi", 30)
const david = createName("david", 15)
avi.name = "AVI"
console.log(avi, david)


// 4
console.log(david)


// 5
console.log(avi.is_adult())


// 6
function countCalled(n = 0) {
    let count = n;
    function incrementCalled() {
        count++
        return count
    };
    return incrementCalled
};


// 7
const counter = countCalled()
console.log(counter())
console.log(counter())


// 8
const counter1 = countCalled(10)
console.log(counter1())
console.log(counter1())


// 11
function createCounter() {
    let counter = 0; 
    return {
        increment() { counter++; },
        getValue() { return counter },
        reset() {counter = 0}
    };
}
const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());


// 12
console.log(myCounter.counter);


// 13
myCounter.reset()
console.log(myCounter.getValue())


// 14
const count1 = createCounter()
const count2 = createCounter()
count1.increment();
console.log(count1.getValue());
console.log(count2.getValue());


// 15
function createProduct(name, price, stock = 0) {
    if (price < 0) {
        console.log("Invalid price...")
        return
    }
    return {
        name,
        price,
        stock,
        in_stock: () => this.stock > 0
    };
};
const banana = createProduct("banana", 5)
console.log(banana);


// 16
console.log(banana.in_stock())


// 17
const apple = createProduct("apple", -10, 100)


// 18
"בוצע ב 16"


// 19
function multiplier(num1) {
    return function double(num2) {
        console.log(num1 * num2)
    };
};
const multi = multiplier(2)
multi(10)


// 20
const createPrefix = (prefix) => (text) => prefix + text;
const sayHelloTo = createPrefix("שלום ");
console.log(sayHelloTo("דנה"));


// 21
function privateMsgs() {
    let messages = []
    return {
        addMsg: function(msg) {
        messages.push(msg)
        },
        getMsgs: () => messages,
        deleteMsgs: (index) => messages.splice(index, 1)
    }
};
const myList = privateMsgs()
myList.addMsg("this is my private messages list")


// 22
console.log(myList.getMsgs())


// 23
myList.deleteMsgs(0)
console.log(myList.getMsgs())