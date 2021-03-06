const electron = require('electron');
const {BrowserWindow,app} = electron;
const path = require('path');

var window_width = 720;
var window_height = 400;
var window = null;

app.on('ready',function()
{
    window = new BrowserWindow({width: window_width,height: window_height,frame: false,icon: path.join(__dirname,'Icon.png'),webPreferences: {nodeIntegration: true}});
    window.loadURL('file://' + __dirname + '/views/index.html');
});

app.on('close',function()
{
    window = null;
});