const app = require('./app'),
    https = require('https'),
    fs = require('fs'),
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

socketService.listen(3001);