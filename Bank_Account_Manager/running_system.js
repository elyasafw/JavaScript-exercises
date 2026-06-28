import {
    closeAccount,
    searchCustomer,
    showCustomers,
    showStatistics,
    withdraw,
    deposit,
} from "./bank.js";
import input from "analiza-sync";

export function menu() {
    let menuOptions = [
        "Create new account",
        "Show customers",
        "Search customer",
        "Deposit",
        "Withdraw",
        "Close account",
        "Show statistics",
        "Exit",
    ];

    for (let [index, option] of menuOptions.entries()) {
        console.log(`${index + 1}. ${option}`);
    }
}

export const choice = (msg) => input(`${msg}:  `);

export function running_system(addCustomer) {
    let userChoice = choice("\nselect your choice (1-8)");

    if (!"12345678".includes(userChoice) || userChoice === "") {
        console.log("invalid choice.. please try again\n");
        return;
    }

    if (userChoice === "8") {
        return "EXIT";
    }

    let customerID;
    let amount;
    switch (userChoice) {
        case "1":
            let name = choice("\n* Name\nenter customer name");
            let balance = Number(choice("* Balance\nenter customer balance"));
            let type = choice(
                "* Type account\nenter type account (regular | premium | student)",
            );

            addCustomer(name, balance, type);
            break;
        case "2":
            showCustomers();
            break;
        case "3":
            customerID = Number(choice("\n* ID\nenter customer ID for search"));
            let customer = searchCustomer(customerID);
            if (customer) console.log("\n", customer);
            break;
        case "4":
            customerID = Number(choice("\n* ID\nenter customer ID"));
            amount = Number(choice("* Amount\nenter amount for deposit"));
            deposit(customerID, amount);
            break;
        case "5":
            customerID = Number(choice("\n* ID\nenter customer ID"));
            amount = Number(choice("* Amount\nenter amount for withdraw"));
            withdraw(customerID, amount);
            break;
        case "6":
            customerID = Number(choice("\n* ID\nenter customer ID"));
            closeAccount(customerID);
            break;
        case "7":
            showStatistics();
            break;
    }
}
