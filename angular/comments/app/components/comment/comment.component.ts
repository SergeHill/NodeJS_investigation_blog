import { Component, Input, Output, EventEmitter } from '@angular/core';
import './comment.component.css';

import { Comment } from './../../models/comment.model'; 

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html'
})
export class CommentComponent {
    @Input() comment: Comment;
    @Output() approve = new EventEmitter();
    @Output() reject = new EventEmitter();

    onApproveClicked() {
        this.approve.emit(this.comment);
    }

    onRejectClicked() {
        this.reject.emit(this.comment);
    }
}