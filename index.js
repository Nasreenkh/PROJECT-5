#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280,
};
async function main() {
    let user_input = await inquirer.prompt([
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"],
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"],
        },
        {
            name: "amount",
            message: "Enter your amount?",
            type: "number", // Corrected typo here
        },
    ]);
    let fromAmount = currency[user_input.from];
    let toAmount = currency[user_input.to];
    let amount = user_input.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount; // Corrected typo here
    console.log(convertedAmount.toFixed(2));
}
main();
