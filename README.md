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
