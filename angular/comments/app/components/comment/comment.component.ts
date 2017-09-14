import { Component, Input } from '@angular/core';
import './comment.component.css';

import { Comment } from './../../models/comment.model'; 

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html'
})
export class CommentComponent {
    @Input() comment: Comment;
}