import { Action } from '@ngrx/store';
import { ActionTypes, Initialise } from './counter.actions';
import { AppState } from '../reducers';


export interface CounterState extends AppState {
    count: number;
}

export const initialState: CounterState = {
    count: 0
};

export function counterReducer(state: CounterState = initialState, action: Action) {
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
