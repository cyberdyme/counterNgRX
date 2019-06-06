import { Action } from '@ngrx/store';
import { ActionTypes, Initialise } from './counter.actions';


export interface AppState {
    count: number;
}

export const initialState: AppState = {
    count: 0
};

export function counterReducer(state: AppState = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Increment:
            return {
                count: state.count + 1
            };

        case ActionTypes.Decrement:
            return {
                count: state.count - 1
            };

        case ActionTypes.Reset:
            return {
                count: 0
            };

        case ActionTypes.Initialise:
                return {
                    count: (action as Initialise).payload
                };

        default:
            return state;
    }
}