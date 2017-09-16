import { Action } from '@ngrx/store';
import { Comment } from '../models';

export const LOAD = 'LOAD_ACTION';
export const LOAD_SUCCESS = 'LOAD_SUCCESS_ACTION';
export const LOAD_FAIL = 'LOAD_FAIL_ACTION';
export const APPOVE_COMMENT = 'APPOVE_COMMENT_ACTION';
export const APPOVE_COMMENT_SUCCESS = 'APPOVE_COMMENT_SUCCESS_ACTION';
export const APPOVE_COMMENT_FAIL = 'APPOVE_COMMENT_FAIL_ACTION';
export const REJECT_COMMENT = 'REJECT_COMMENT_ACTION';
export const REJECT_COMMENT_SUCCESS = 'REJECT_COMMENT_SUCCESS_ACTION';
export const REJECT_COMMENT_FAIL = 'REJECT_COMMENT_FAIL_ACTION';

export class LoadAction implements Action {
    readonly type = LOAD;
}

export class LoadSuccesAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Comment[]) { }
}

export class LoadFailAction implements Action {
    readonly type = LOAD_FAIL;
}

export class ApproveCommentAction implements Action {
    readonly type = APPOVE_COMMENT;

    constructor(public payload: Comment) { }
}

export class ApproveCommentSuccessAction implements Action {
    readonly type = APPOVE_COMMENT_SUCCESS;

    constructor(public payload: Comment) { }
}

export class ApproveCommentFailAction implements Action {
    readonly type = APPOVE_COMMENT_FAIL;
}

export class RejectCommentAction implements Action {
    readonly type = REJECT_COMMENT;

    constructor(public payload: Comment) { }
}

export class RejectCommentSuccessAction implements Action {
    readonly type = REJECT_COMMENT_SUCCESS;

    constructor(public payload: Comment) { }
}

export class RejectCommentFailAction implements Action {
    readonly type = REJECT_COMMENT_SUCCESS;
}