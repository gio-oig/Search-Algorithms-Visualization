import { createAction, handleActions } from 'redux-actions';

export const SET_IS_RUNNING = 'SET_IS_RUNNING';
export const setRunning = createAction(SET_IS_RUNNING);

export const isRunning = handleActions(
	{
		SET_IS_RUNNING: (state, { payload }) => {
			return payload;
		},
	},
	false
);
