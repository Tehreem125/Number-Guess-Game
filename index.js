import inquirer from "inquirer";
let numGenerator = Math.floor(Math.random() * 100);
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess number between 1-100"
    }
]);
const { userGuess } = answers;
if (userGuess === numGenerator) {
    console.log(`userGuess ${userGuess}, numGenerator ${numGenerator}`);
    console.log(`congratulations you answer is correct\n `);
}
else {
    console.log(`please try again better luck next time`);
}
