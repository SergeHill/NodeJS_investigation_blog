import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import * as actions from '../actions/comment';
import { SocketService } from './socket.service';

@Injectable()
export class CommentService {

    commentsLoaded: Observable<any>;
    commetApproved: Observable<any>;
    commentRejected: Observable<any>;
    commentAdded: Observable<any>;
    
    constructor(private socket: SocketService) {
        this.commentsLoaded = this.socket.listen('comments-loaded');
        this.commetApproved = this.socket.listen('comment-approved');
        this.commentRejected = this.socket.listen('comment-rejected');
        this.commentAdded = this.socket.listen('comment-added');
    }

    connect() {
        this.socket.connect();
        this.socket.join('comments');
    }

    loadNewComments() {
        this.socket.emit('comments-load');
    }

    approveComment(comment: Comment) {
        this.socket.emit('comment-approve', comment);
    }

    rejectComment(comment: Comment) {
        this.socket.emit('comment-reject', comment);
    }
}