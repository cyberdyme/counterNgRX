import { createFeatureSelector, createSelector, createReducer, on} from '@ngrx/store';
import * as fromCounterActions from './counter.actions';
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


export const counterReducer = createReducer(
    initialState,
    on(fromCounterActions.Increment, (state) => ({
        ...state,
        count: state.count + 1,
      })),
    on(fromCounterActions.Decrement, (state) => ({
        ...state,
        count: state.count + 1,
      })),
    on(fromCounterActions.Reset, (state) => ({
        ...state,
        count: 0,
      })),
    on(fromCounterActions.ResetToOne, (state) => ({
        ...state,
        count: 1,
      })),
    on(fromCounterActions.Initialise, (state, {id}) => ({
        ...state,
        count: id,
      }))
);

/*
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
*/

export const getCountersState = createFeatureSelector<State, CounterState>('counter');


export const getCounterState = createSelector(
    getCountersState,
    state => state
  );

export const getCounterCount = createSelector(
    getCounterState,
    state => state.count
  );
