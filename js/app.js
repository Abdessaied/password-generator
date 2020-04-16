const {PythonShell} = require('python-shell');
const path = require('path');
const remote = require('electron').remote;

var main = document.getElementById('main-input');
var pass_length = document.getElementById('pass-length');

function LimitLengthField(element)
{
    if(parseFloat(element.value) < 6)
    {
        element.value = "6";
    }
}

function Generate()
{
    var options = {
        scriptPath: path.join(__dirname,'../scripts/'),
        args: [pass_length.value]
    }

    var password = new PythonShell('main.py',options);

    password.on('message',function(message)
    {
        main.value = message;
    });
}

function ExitApp()
{
    var win = remote.getCurrentWindow();
    win.close();
}