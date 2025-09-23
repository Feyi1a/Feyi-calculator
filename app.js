import { add, substract, multiply, divide} from "./my_modules/calculator.js";
import { baseName, pathName } from "./my_modules/utility.js";
import { argv } from "process";
import chalk from "chalk";

// Getting the command line arguments
 const argvs = process.argv;

 const operation = argv[0];
 const a = parseInt(argv[1]);
 const b = parseInt(argv[2]);

if (operation === 'add'){
    console.log(operation + 'is' + (a + b));
};

if (operation === 'substract'){
    console.log(operation + 'is' + (a - b));
};

if (operation === 'multiply'){
    console.log(operation + 'is' + (a * b));
};

if (operation === 'divide'){
    console.log(operation + 'is' + (a / b));
};

// Displaying the results:
console.log(`${chalk.blue('My Calculator File Path is: ',import.meta.url)}\n`);
console.log('My Calculator Base Name:' , `${baseName()}\n`);

// Displaying the Student ID:
console.log('Students ID NUM:', `${chalk.green('BD/2025/TC3/057')}\n\n`);

// Using Chalk module to style the output in the terminal:
console.log('Result for Addition is:', `${chalk.blue(add(3, 5))}`);
console.log(`${chalk.redBright.bold('Result for Substraction is:',substract(9, 6))}\n`);
console.log('Result for Multiplication is:', `${chalk.yellowBright.bold(multiply(8, 7))}`);
console.log(`${chalk.cyanBright.bold('Result for Division is:', (divide(10, 100)))}\n`);