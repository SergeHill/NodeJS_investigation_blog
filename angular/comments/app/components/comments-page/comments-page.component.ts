import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

import './comments-page.component.css';

import { CommentService } from './../../services/comment.service';

@Component({
    selector: 'comments-page',
    templateUrl: './comments-page.component.html'
})
export class CommentsPageComponent{

    comments: Observable<any>;

    constructor(private store: Store<State>) {
        this.comments = store.select(state => state.comments.comments);
    }
}