import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import './comments-page.component.css';

import { CommentService } from './../../services/comment.service';

@Component({
    selector: 'comments-page',
    templateUrl: './comments-page.component.html'
})
export class CommentsPageComponent implements OnInit {

    comments: Observable<Comment>;

    constructor(private commentService: CommentService) {

    }

    ngOnInit(): void {
        this.comments = this.commentService.comments;
    }
}