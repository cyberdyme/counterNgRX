import { createAction, props } from '@ngrx/store';

export const Loading = createAction(
    '[Progress Component] Loading'
);

export const Progress = createAction(
    '[Progess Component] Progress',
    props<{ progress: number }>()
);

export const Loaded = createAction(
    '[Progess Component] Loaded'
);

