import { Action, createReducer, on } from '@ngrx/store';
import { State } from '../reducers';
import * as fromProgessActions from './progress.actions';

export interface ProgressState extends State {
    loading: boolean;
    value: number;
}

export const initialState: ProgressState = {
    loading: false,
    value: 0
};

export const progressReducer = createReducer(
    initialState,
    on(fromProgessActions.Loading, (state) => ({ ...state, loading: true, value: 0 })),
    on(fromProgessActions.Progress, (state, {progress}) => ({ ...state, loading: true, value: state.value + progress })),
    on(fromProgessActions.Loaded, (state) => ({ ...state, loading: false, value: 0 })),
);
