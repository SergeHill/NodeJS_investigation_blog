var dal = require('./dataAccessLayer');
var socketio = require('socket.io');
var io = null;

function init(client) {

    client.on('join', room => {
        console.log('client joined ' + room);
        client.join(room);
    });

    client.on('comment-approve', comment => {
        comment.approved = 1;
        console.log('comment-approve');
        dal.updateComment(comment.id, comment.approved)
            .then(() => {
                console.log('comment-approved');
                io.in('comments').emit('comment-approved', comment);
            })
            .catch(err => console.log(err));
    });

    client.on('comment-reject', comment => {
        comment.approved = 0;
        dal.updateComment(comment.id, comment.approved)
            .then(() => {
                io.in('comments').emit('comment-rejected', comment);
            });
    });

    client.on('comments-load',() => {
        dal.getNewComments().then(data => {
            client.emit('comments-loaded', data);
        });

    });
}

function addComment(comment) {
    io.in('comments').emit('comment-added', comment);
}

function listen(port) {
    io = socketio.listen(port);

    io.on('connection', client => {
        init(client);
    });
}

exports.init = init;
exports.addComment = addComment;
exports.listen = listen;