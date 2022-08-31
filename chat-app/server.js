var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'Prabhat', message: 'Hi'},
    {name: 'Ranvijay', message: 'Hello'}
]

app.get('/messages', (req, res) => {
    res.send(messages);
})

app.get('/messages/:user', (req, res) => {
    var user = req.params.user
    var m = messages.filter(item => item.name === user)
    res.send(m);
})

app.post('/messages', (req, res) => {
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('User connected!');
})

var server = http.listen(8001, () => {
    console.log('Server is listening to port: ', server.address().port);
});