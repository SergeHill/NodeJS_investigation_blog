import { Action } from '@ngrx/store';
import { Comment } from '../models';
import * as comment from '../actions/comment';

export interface State {
    comments: Comment[];
    loading: boolean,
}

const initialState: State = {
    comments: [],
    loading: false,
}

export function reducer(state = initialState, action: comment.Actions) {
    console.log(action);
    
    switch (action.type) {
        case comment.LOAD:
        case comment.APPOVE_COMMENT:
        case comment.REJECT_COMMENT:
            return { ...state, loading: true };

        case comment.APPOVE_COMMENT_SUCCESS:
        case comment.REJECT_COMMENT_SUCCESS:
            return {
                ...state,
                comments: state.comments.filter(c => c.id !== action.payload.id),
                loading: false,
            };

        case comment.LOAD_FAIL:
        case comment.APPOVE_COMMENT_FAIL:
        case comment.REJECT_COMMENT_FAIL:
            return { ...state, loading: false };
        
        case comment.LOAD_SUCCESS: 
            return { ...state, comments: action.payload, loading: false }

        case comment.NEW_COMMENT: 
            return { ...state, comments: state.comments.concat(action.payload)}

        default:
            return state;
    }
}

