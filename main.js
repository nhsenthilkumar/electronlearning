const { app, BrowserWindow } = require('electron');
const path = require('path');

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

app.on('ready', () => {
  createWindow();
});
