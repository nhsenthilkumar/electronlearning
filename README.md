# Learn Electron Development

## Step 1: NPM initialization

```
npm init -y
```

Package.json will added into the project

## Step 2: Run basic javascript using NPM

Add main.js file and write a welcome message into console

```
console.log('NPM script run properly.')
```

Add a new script element in package.json to start the application using node.

```
"scripts": {
    "start": "node main.js"
  }
```

Test the script configuration using the following command

```
npm run start
```

You should able to see the message in the console window.

## Step 3 install electron

Run the following script

```
npm install electron --save-dev
```

Change the script configuration to use electron instead of node as shown below

```
"scripts": {
    "start": "electron main.js"
  }
```

Test the script configuration using the following command

```
npm run start
```

You should able to see the message in the console window.

## Step 4 Create electron application

Change the main.js content as given below

```
const { app } = require('electron');

app.on('ready', () => {
  console.log('Electron application started');
});
```

Test the application is still works. https://electronjs.org/docs/api/app

### Step 5 Create UI and launch it

create sample.html file with following content

```
<html>
  <body>
    <h1>First Electron application using basic HTML</h1>
  </body>
</html>

```

In main.js
include BrowserWindow from electron and path as given below

```
const { app, BrowserWindow } = require('electron');
const path = require('path');
```

Write a method to create a window and load the above created HTML as given below

```
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: '500px',
    height: '500px',
    title: 'Main Window'
  });

  mainWindow.loadFile(path.join(__dirname, 'sample.html'));

  mainWindow.show();
}
```

on application ready lets create the window instead of console log and test the application

```
app.on('ready', () => {
  createWindow();
});

```
