import { createCustomer } from "./bank.js";
import { menu, running_system, choice } from "./running_system.js";

function main() {
    console.log("\n==== Bank Management ====\n");
    const bankManager = createCustomer();
    let keepRunning = true;

    while (keepRunning) {
        menu();

        let status = running_system(bankManager);

        if (status === "EXIT") {
            keepRunning = false;
            continue;
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
