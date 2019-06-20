import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionTypes, Initialise } from './counter.actions';
import * as fromRoot from '../reducers';

export interface CounterState {
    count: number;
}


export interface State extends fromRoot.State {
    counter: CounterState;
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

export const getCountersState = createFeatureSelector<State, CounterState>('counter');


export const getCounterState = createSelector(
    getCountersState,
    state => state
  );

export const getCounterCount = createSelector(
    getCounterState,
    state => state.count
  );
