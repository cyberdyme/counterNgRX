import { Action, createReducer, on } from '@ngrx/store';
import { State } from '../reducers';
import * as fromProgessActions from './progress.actions';

export interface ProgressState extends State {
    loading: boolean;
}

export const initialState: ProgressState = {
    loading: false
};

export const progressReducer = createReducer(
    initialState,
    on(fromProgessActions.Loading, (state) => ({ loading: true})),
    on(fromProgessActions.Loaded, (state) => ({ loading: false})),
);

/*
export function progressReducer(state: ProgressState = initialState, action: Action) {
    switch (action) {
        case Loading:
            return {
                loading: true
            };

        case Loaded:
            return {
                loading: false
            };

        default:
            return state;
    }
}
*/
