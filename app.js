import { add, substract, multiply, divide} from "./my_modules/calculator.js";
import { baseName, pathName } from "./my_modules/utility.js";
import { argv } from "process";
import chalk from "chalk";

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

console.log('My Calculator file Path:' , `${pathName()}\n`);
console.log('My Calculator Base Name:' , `${baseName()}\n`);
console.log('Students ID NUM:', `${chalk.green('BD/2025/TC3/057')}\n\n`);
console.log('Result for Addition is:', `${chalk.blue(add(3, 5))}`);
console.log('Result for Substraction is:', `${chalk.redBright.bold(substract(9, 6))}\n`);
console.log('Result for Multiplication is:', `${chalk.yellowBright.bold(multiply(8, 7))}`);
console.log('Result for Division is:', `${chalk.cyanBright.bold(divide(10, 100))}\n`);