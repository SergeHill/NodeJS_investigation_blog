import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, transition, animate, sequence, style, stagger, keyframes, query } from '@angular/animations'
import { Store } from '@ngrx/store';

import './comments-page.component.css';

import { CommentService } from './../../services/comment.service';
import { State } from '../../reducers';
import { Comment } from '../../models';
import * as commentActions from '../../actions/comment';

@Component({
    selector: 'comments-page',
    templateUrl: './comments-page.component.html',
    animations: [
        trigger('loadAnimation', [
            transition('* => *', [
                query(':enter div', [
                    style({ opacity: 0 }),
                    stagger(50, [
                        animate('0.1s', style({ opacity: 1 }))
                    ])
                ], { optional: true })
            ])
        ])
    ]
})
export class CommentsPageComponent implements OnInit {

    comments: Observable<any>;
    isLoading: Observable<boolean>;

    constructor(private store: Store<State>, private commentService: CommentService) {
        this.comments = store.select(state => state.comments.comments);
        this.isLoading = store.select(state => state.comments.loading);
    }

    ngOnInit(): void {
        this.commentService.connect();
        this.store.dispatch(new commentActions.LoadAction());
    }

    approveComment(comment: Comment) {
        this.store.dispatch(new commentActions.ApproveCommentAction(comment));
    }

    rejectComment(comment: Comment) {
        this.store.dispatch(new commentActions.RejectCommentAction(comment));
    }
}