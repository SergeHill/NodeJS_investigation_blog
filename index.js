const app = require('./app'),
    https = require('https'),
    fs = require('fs'),
    io = require('socket.io').listen(3001),
    socketService = require('./socketService');

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});

const httpsOptions = {
    key: fs.readFileSync('./ssl/private.key'),
    cert: fs.readFileSync('./ssl/certificate.pem')
};

const httpsServer = https
    .createServer(httpsOptions, app)
    .listen(3443);

io.on('connection', client => {
    socketService.init(client);
})