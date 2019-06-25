import { createAction } from '@ngrx/store';

/*
export enum ActionTypes {
    Loading = '[Progess Component] Loading',
    Loaded = '[Progress Component] Loaded'
}
*/
/*
export class Loading implements Action {
    readonly type = ActionTypes.Loading;
}

export class Loaded implements Action {
    readonly type = ActionTypes.Loaded;
}
*/

export const Loaded = createAction(
    '[Progess Component] Loaded'
);

export const Loading = createAction(
    '[Progress Component] Loaded'
);

