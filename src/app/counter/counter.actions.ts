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

export const ResetToOne = createAction (
    '[Counter Component] Reset To Zero'
);

export const Initialise = createAction (
    '[Counter Component] Initialise',
    props<{ id: number }>()
);
