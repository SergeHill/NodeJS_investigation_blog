import { ActionReducer, combineReducers } from '@ngrx/store';
import * as comments from './comment';

export interface State {
    comments: comments.State;
}

export const reducers = {
    comments: comments.reducer,
}