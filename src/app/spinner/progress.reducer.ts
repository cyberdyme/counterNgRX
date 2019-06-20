import { Action } from '@ngrx/store';
import { ActionTypes } from './progress.actions';
import { State } from '../reducers';

export interface ProgressState extends State {
    loading: boolean;
}

export const initialState: ProgressState = {
    loading: false
};


export function progressReducer(state: ProgressState = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Loading:
            return {
                loading: true
            };

        case ActionTypes.Loaded:
            return {
                loading: false
            };

        default:
            return state;
    }
}

