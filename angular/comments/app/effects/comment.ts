import { Injectable } from '@angular/core'
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as commentActions from '../actions/comment';
import { Comment } from '../models';
import { CommentService } from '../services';

@Injectable()
export class CommentEffects {
    constructor(private actions: Actions, private commentService: CommentService) { }

    interval = 500;

    @Effect({ dispatch: false })
    loadComments$ = this.actions
        .ofType<commentActions.LoadAction>(commentActions.LOAD)
        .do(() => this.commentService.loadNewComments());

    @Effect()
    commentsLoaded$ = this.commentService.commentsLoaded
        .switchMap(comments => Observable.of(new commentActions.LoadSuccesAction(comments)));

    @Effect()
    commentAdded$ = this.commentService.commentAdded
        .switchMap(comment => Observable.of(new commentActions.NewCommentAction(comment)));

    @Effect({ dispatch: false })
    approveComment$ = this.actions
        .ofType<commentActions.ApproveCommentAction>(commentActions.APPROVE_COMMENT)
        .map(action => action.payload)
        .do(comment => this.commentService.approveComment(comment));

    @Effect()
    commentApproved$ = this.commentService.commetApproved
    .mergeMap(comment => 
        Observable.of(new commentActions.ApproveCommentAboutToSuccessAction(comment))
            .concat(Observable.empty().delay(this.interval))
            .concat(Observable.of(new commentActions.ApproveCommentSuccessAction(comment)))
);

    @Effect({ dispatch: false })
    rejectComment$ = this.actions
        .ofType<commentActions.RejectCommentAction>(commentActions.REJECT_COMMENT)
        .map(action => action.payload)
        .do(comment => this.commentService.rejectComment(comment))

    @Effect()
    commentRejected$ = this.commentService.commentRejected
        .mergeMap(comment => 
                Observable.of(new commentActions.RejectCommentAboutToSuccessAction(comment))
                    .concat(Observable.empty().delay(this.interval))
                    .concat(Observable.of(new commentActions.RejectCommentSuccessAction(comment)))
        );
}