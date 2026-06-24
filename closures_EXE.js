// 1.
function createLogger() {
    console.log("hello");
};


// 2.
function createGreeting(name) {
    let fn = () => `hello ${name}`;
    return fn();
};
console.log(createGreeting("eli"))


// 3.
function createCounter() {
    let count = 0;
    function increment() {
        count ++;;
        return count
    };
    return increment
}
const counter = createCounter();


// 4.
"10"

// 5
function createMultiplier(x1) {
    function double(x2) {
        console.log(x1 * x2);
    };
    return double
};
const double = createMultiplier(5);
double(2);


// 6
function createAdder(n1) {
    function add(n2) {
        console.log(n1 + n2);
    };
    return add
};
const add5 = createAdder(5);
add5(3);


// 7
function createSecret() {
    let innerValue = [1, 2, 3, 4, 5];
    function getSecret() {
        return innerValue;
    };
    function getSetter(value) {
        innerValue.push(value);
    };
    return {getSecret, getSetter};
};
const object = createSecret();
console.log(object);


// 8
function once(fn) {
    return function running() {
        fn();
    };
};


// 15
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    let deposit = (amount) => balance += amount;
    let withdraw = (amount) => balance -= initialBalance;
    let getBalance = () => balance;
    return {deposit, withdraw, getBalance}
}
const bank = createBankAccount(50000);