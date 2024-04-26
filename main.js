#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first name", type: "number", name: "firstNumber" },
    { message: "Enter second name", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division", "Percentage", "Modulus"],
    },
]);
console.log(answer);
//condition Test
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log(answer.firstNumber / answer.secondNumber * 100);
}
else if (answer.operator === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
