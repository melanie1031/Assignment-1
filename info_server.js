// took this from Lab 13 ex 1b
var express = require('express'); // before this we must've used nps install
var app = express();
app.all('*', function (request, response, next) { //* means any path 
    console.log(request.method + ' to ' + request.path);
    next();
});

app.use(express.static('./public')); // this only works for files in the public folder, however we don't have that folder in here
app.listen(8090, () => console.log(`listening on port 8090`));
