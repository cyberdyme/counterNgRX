import { ActionReducerMap, Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

// tslint:disable-next-line:no-empty-interface
export interface State {
}

export const ROOT_REDUCERS = new InjectionToken<
    ActionReducerMap<any, Action>>('Root reducers token', {
        factory: () => ({
        }),
    });


// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();

        return result;
    };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];
