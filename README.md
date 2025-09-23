
## Project structure

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5hcugvfa5wy6nb702pkb.png)

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
  "name": "ameh-calculator",
  "version": "1.0.0",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "dev": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
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
git branch -M main
git push -u origin main
```
