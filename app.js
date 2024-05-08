#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000; //dollar
let mypin = 251286;
console.log("welcome saher ATM machine");
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinanswer.pin === mypin) {
    console.log("pin is correct, login sucessfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select an operation",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <= mybalance) {
            mybalance -= amountAns.amount;
            console.log("your remaining balance is: " + mybalance);
        }
        else if (amountAns.amount > mybalance) {
            console.log("insuficient balance");
        }
    }
    else if (operationAns.operation === "fastcash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        if (fastcashAns.fastcash <= mybalance) {
            mybalance -= fastcashAns.fastcash;
            console.log("your remaining balance is: " + mybalance);
        }
        else if (fastcashAns.fastcash > mybalance) {
            console.log("insuficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + mybalance);
    }
}
else {
    console.log("incorrect pin, Try again");
}
