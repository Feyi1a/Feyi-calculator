
## Project structure

![Image description](https://drive.google.com/file/d/1WK76j_O8OplXt4kdUUbGXGX_aCvWaVcd/view?usp=sharing)

## Project Setup
- Create directory and cd to the directory

```
mkdir my_module
cd my_module
```
 - Initialize and install third-party module

```
npm init -y
npm i chalk
```

- Update the `package.json` file

```
{
  "name": "feyi_calculator",
  "description": "A simple NodeJs Calculator.",
  "version": "1.0.0",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Olukayode Feyi",
  "license": "ISC",
  "dependencies": {
    "chalk": "^5.4.1"
  }
}
```
- Create the calculator.js file in the custom module to implement basic arithmetic calculation and export

![Image description](https://drive.google.com/file/d/1atd6cFWo3XsWWtuNq_iEObSeIE42Zf0S/view?usp=drive_link)

- Create app.js file in the root directory to import the functions

![Image description](https://drive.google.com/file/d/1rXmVyOttYvamkYCahoLhKnjtUPQnMtJy/view?usp=sharing)

- Run the app based on the scripts added in `package.json` file
![Image description](https://drive.google.com/file/d/1ZiXxgsqZ0eVgNhnleUgE57AgzpZzjcMo/view?usp=sharing)

```
npm start
```
to show the output:
![Image description](https://drive.google.com/file/d/1Z6cB5kQjYb3dWTz0Cqrtx04A4mp1_6iZ/view?usp=sharing)

- Initialize git, add and commit the project to GitHub

```
git init
git add .
git commit -m "message"
```
- And then pushed to my repository.

```
git remote add origin https://github.com/Feyi1a/Feyi-calculator.git
git branch firstBranch
git push -u origin firstBranch
```
