import { validateName, validateAmount, validateTypeAccount } from "./utils.js";

const Customers = [];

function createCustomer() {
    let id = 0;
    function incrementID() {
        return ++id;
    }
    function newAccount(name, balance, type) {
        if (!validateName(name)) {
            console.log("invalid name...");
            return;
        } else if (!validateAmount(balance)) {
            console.log("invalid balance...");
            return;
        } else if (!validateTypeAccount(type)) {
            console.log("invalid type account");
            return;
        }
        const currentId = incrementID();
        Customers.push({
            id: currentId,
            name: name.trim(),
            balance,
            type,
            status: true,
        });
        console.log("customer created successfully");
    }
    return newAccount;
}

function showCustomers() {
    for (let customer of Customers) {
        console.log(customer);
    }
}

function deposit(id, amount) {
    const customer = searchCustomer(id);
    if (!customer) {
        console.log("customer not found...");
    } else if (!customer.status) {
        console.log("customer not active");
    } else if (!validateAmount(amount)) {
        console.log("invalid amount...");
    } else {
        customer.balance += amount;
        console.log("deposit compact successfully");
    }
}

function withdraw(id, amount) {
    const customer = searchCustomer(id);
    if (!customer) {
        console.log("customer not found...");
    } else if (!customer.status) {
        console.log("customer not active");
    } else if (!validateAmount(amount)) {
        console.log("invalid amount...");
    } else if (!customer.balance >= amount) {
        console.log("balance is not enough");
    } else {
        customer.balance -= amount;
        console.log("withdraw compact successfully");
    }
}

function searchCustomer(id) {
    const customer = Customers.find((c) => c.id === id);
    return customer;
}

function closeAccount(id) {
    const customer = searchCustomer(id);
    if (!customer) {
        console.log("customer not found...");
    } else {
        customer.status = false;
        console.log("account closed successfully");
    }
}

function showStatistics() {
    let balancesList = Customers.map((c) => c.balance);
    let totalCustomers = balancesList.length;
    let totalActivates = Customers.filter((c) => c.status).length;
    let totalMoney = balancesList.reduce((acc, current) => acc + current, 0);
    let avgBalances = totalMoney / totalCustomers;
    let highBalance = Math.max(...balancesList);
    console.log("=====Statistics=====");
    console.log(
        `Total Customers: ${totalCustomers}
Active Accounts: ${totalActivates}
Total Money: ${totalMoney}
Average Balance: ${avgBalances}
Highest Balance: ${highBalance}`,
    );
}
