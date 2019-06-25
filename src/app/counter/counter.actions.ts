import {createAction, props } from '@ngrx/store';

export const Increment = createAction (
    '[Counter Component] Increment',
);

export const Decrement = createAction (
    '[Counter Component] Decrement'
);

export const Reset = createAction (
    '[Counter Component] Reset'
);

export const Initialise = createAction (
    '[Counter Component] Initialise',
    props<{ id: number }>()
);

/*
export enum ActionTypes {
    Increment = '[Counter Component] Increment',
    Decrement = '[Counter Component] Decrement',
    Reset = '[Counter Component] Reset',
    Initialise = '[Counter Component] Initialise'
}

export class Increment implements Action {
    readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}

export class Initialise implements Action {
    readonly type = ActionTypes.Initialise;
    constructor(public payload: number) {
    }
}
*/