import {
    createCustomer,
    closeAccount,
    searchCustomer,
    showCustomers,
    showStatistics,
    withdraw,
    deposit,
} from "./bank.js";
import input from "analiza-sync";

function menu() {
    let menuOptions = [
        "Create new account",
        "Show customers",
        "Search customer",
        "Deposit",
        "Withdraw",
        "Close account",
        "Show statistics",
        "exit",
    ];
    console.log("\n==== Bank Management ====\n");
    for (let [index, option] of menuOptions.entries()) {
        console.log(`${index + 1}. ${option}`);
    }
}

const choice = (msg) => input(`${msg}:  `);

function main() {
    const bankManager = createCustomer();
    let keepRunning = true;

    while (keepRunning) {
        menu();
        let userChoice = choice("\nselect your choice (1-8)");

        if (!"12345678".includes(userChoice) || userChoice === "") {
            console.log("invalid choice.. please try again\n");
            continue;
        }

        if (userChoice === "8") {
            console.log("Thank you for using the bank system. Goodbye!");
            break;
        }

        let customerID;
        let amount;
        switch (userChoice) {
            case "1":
                let name = choice("\n* Name\nenter customer name");
                let balance = Number(
                    choice("* Balance\nenter customer balance"),
                );
                let type = choice(
                    "* Type account\nenter type account (regular | premium | student)",
                );
                bankManager(name, balance, type);
                break;
            case "2":
                showCustomers();
                break;
            case "3":
                customerID = Number(
                    choice("\n* ID\nenter customer ID for search"),
                );
                let customer = searchCustomer(customerID);
                if (customer) {
                    console.log("\n", customer);
                }
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
            default:
                console.log("\n-- Feature not implemented yet --");
                break;
        }

        console.log("\n-----------------------------------");
        let anotherAction = choice(
            "Would you like to perform another action? (Y/N)",
        );
        if (anotherAction.toLowerCase() !== "y") {
            keepRunning = false;
            console.log("Thank you for using the bank system. Goodbye!");
        }
        console.log("-----------------------------------\n");
    }
}

main();
