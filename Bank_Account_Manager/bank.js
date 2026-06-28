import { validateName, validateAmount, validateTypeAccount } from "./utils.js";

const Customers = [];

export function createCustomer() {
    let id = 0;
    function incrementID() {
        return ++id;
    }
    function newAccount(name, balance, type) {
        if (!validateName(name)) {
            console.log("-- invalid name --");
            return;
        } else if (!validateAmount(balance)) {
            console.log("-- invalid balance --");
            return;
        } else if (!validateTypeAccount(type)) {
            console.log("-- invalid type account --");
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
        console.log(`\ncustomer ID: ${id} created successfully`);
    }
    return newAccount;
}

export function showCustomers() {
    if (Customers.length === 0) {
        console.log("-- customers list is empty --");
        return;
    }
    console.log("\n=== Customers List ===\n");
    for (let customer of Customers) {
        console.log(customer);
    }
}

export function deposit(id, amount) {
    const customer = searchCustomer(id);
    if (!customer) return;
    if (!customer.status) {
        console.log(`-- customer ID: ${id} not active --`);
        return;
    } else if (!validateAmount(amount)) {
        console.log("-- invalid amount --");
        return;
    } else {
        customer.balance += amount;
        console.log("\ndeposit complete successfully");
        console.log(`balance: ${customer.balance}`);
    }
}

export function withdraw(id, amount) {
    const customer = searchCustomer(id);
    if (!customer) return;
    if (!customer.status) {
        console.log(`-- customer ID: ${id} not active --`);
        return;
    } else if (!validateAmount(amount)) {
        console.log("-- invalid amount --");
        return;
    } else if (!customer.balance >= amount) {
        console.log("-- balance is not enough --");
        return;
    } else {
        customer.balance -= amount;
        console.log("\nwithdraw complete successfully");
        console.log(`balance: ${customer.balance}`);
    }
}

export function searchCustomer(id) {
    const customer = Customers.find((c) => c.id === id);
    if (customer) {
        return customer;
    }
    console.log(`-- customer ID: ${id} not found --`);
    return;
}

export function closeAccount(id) {
    const customer = searchCustomer(id);
    if (!customer) return;
    customer.status = false;
    console.log(`\naccount ID: ${id} closed successfully`);
}

export function showStatistics() {
    let balancesList = Customers.filter((c) => c.status).map((c) => c.balance);
    let totalCustomers = balancesList.length;
    let totalActivates = balancesList.length;
    let totalMoney = balancesList.reduce((acc, current) => acc + current, 0);
    let avgBalances = totalMoney / totalCustomers || 0;
    let highBalance = Math.max(...balancesList) || 0;
    console.log("\n=== Statistics ===");
    console.log(
        `Total Customers: ${totalCustomers}
Active Accounts: ${totalActivates}
Total Money: ${totalMoney}
Average Balance: ${avgBalances}
Highest Balance: ${highBalance}`,
    );
}
