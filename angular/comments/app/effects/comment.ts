import { Injectable } from '@angular/core'
import { Actions, Effect, toPayload} from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as commentActions from '../actions/comment';
import { Comment } from '../models';

@Injectable()
export class CommentEffects {
    constructor(private actions: Actions) { }

    @Effect()
    approve$ = this.actions
        .ofType<commentActions.ApproveCommentAction>(commentActions.APPOVE_COMMENT)
        .map(action => action.payload)
        .switchMap(payload => {
            return Observable.of(new commentActions.ApproveCommentSuccessAction(payload))
                .delay(1000);
        });

    @Effect()
    reject$ = this.actions
        .ofType<commentActions.RejectCommentAction>(commentActions.REJECT_COMMENT)
        .map(action => action.payload)
        .switchMap(payload => {
            return Observable.of(new commentActions.RejectCommentSuccessAction(payload))
                .delay(1000)
        });
}