var dal = require('./dataAccessLayer');
var socket = null;
function init(io) {
    socket = io;
    socket.on('comment-approve', comment => {
        comment.approved = 1;
        console.log(comment);
        dal.updateComment(comment.id, comment.approved)
            .then(() => {
                socket.sockets.emit('comment-approved', comment);
            })
            .catch(err => console.log(err));
    });

    socket.on('comment-reject', comment => {
        comment.approved = 0;
        dal.updateComment(comment.id, comment.approved)
            .then(() => {
                socket.sockets.emit('comment-rejected', comment);
            });
    });

    socket.on('comments-load',() => {
        dal.getNewComments().then(data => {
            socket.emit('comments-loaded', data);
        });

    });
}

function addComment(comment) {
    socket.emit('comment-added', comment);
}

exports.init = init;
exports.addComment = addComment;
