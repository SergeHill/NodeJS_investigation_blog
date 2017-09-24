import { Action } from '@ngrx/store';
import { Comment } from '../models';

export const LOAD = 'LOAD_ACTION';
export const LOAD_SUCCESS = 'LOAD_SUCCESS_ACTION';
export const LOAD_FAIL = 'LOAD_FAIL_ACTION';
export const APPROVE_COMMENT = 'APPROVE_COMMENT_ACTION';
export const APPROVE_COMMENT_SUCCESS = 'APPROVE_COMMENT_SUCCESS_ACTION';
export const APPROVE_COMMENT_ABOUT_TO_SUCCESS = 'APPOVE_COMMENT_ABOUT_TO_SUCCESS_ACTION';
export const APPROVE_COMMENT_FAIL = 'APPROVE_COMMENT_FAIL_ACTION';
export const REJECT_COMMENT = 'REJECT_COMMENT_ACTION';
export const REJECT_COMMENT_SUCCESS = 'REJECT_COMMENT_SUCCESS_ACTION';
export const REJECT_COMMENT_ABOUT_TO_SUCCESS = 'REJECT_COMMENT_ABOUT_TO_SUCCESS_ACTION';
export const REJECT_COMMENT_FAIL = 'REJECT_COMMENT_FAIL_ACTION';
export const NEW_COMMENT = 'NEW_COMMENT_ACTION';

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
    readonly type = APPROVE_COMMENT;

    constructor(public payload: Comment) { }
}

export class ApproveCommentSuccessAction implements Action {
    readonly type = APPROVE_COMMENT_SUCCESS;

    constructor(public payload: Comment) { }
}

export class ApproveCommentAboutToSuccessAction implements Action {
    readonly type = APPROVE_COMMENT_ABOUT_TO_SUCCESS;

    constructor(public payload: Comment) { }
}

export class ApproveCommentFailAction implements Action {
    readonly type = APPROVE_COMMENT_FAIL;
}

export class RejectCommentAction implements Action {
    readonly type = REJECT_COMMENT;

    constructor(public payload: Comment) { }
}

export class RejectCommentAboutToSuccessAction implements Action {
    readonly type = REJECT_COMMENT_ABOUT_TO_SUCCESS;

    constructor(public payload: Comment) { }
}

export class RejectCommentSuccessAction implements Action {
    readonly type = REJECT_COMMENT_SUCCESS;

    constructor(public payload: Comment) { }
}

export class RejectCommentFailAction implements Action {
    readonly type = REJECT_COMMENT_FAIL;
}

export class NewCommentAction implements Action {
    readonly type = NEW_COMMENT;

    constructor(public payload: Comment) { }
}

export type Actions
    = LoadAction
    | LoadSuccesAction
    | LoadFailAction
    | ApproveCommentAction
    | ApproveCommentSuccessAction
    | ApproveCommentFailAction
    | ApproveCommentAboutToSuccessAction
    | RejectCommentAction
    | RejectCommentSuccessAction
    | RejectCommentFailAction
    | RejectCommentAboutToSuccessAction
    | NewCommentAction;