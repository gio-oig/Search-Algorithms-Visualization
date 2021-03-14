import { createAction, handleActions } from 'redux-actions';

export const SET_CURRENT_MERGEX = 'SET_CURRENT_MERGEX';
export const setCurrentMerge = createAction(SET_CURRENT_MERGEX);

export const currentMerge = handleActions(
	{
		SET_CURRENT_MERGEX: (state, { payload }) => {
			return payload;
		},
	},
	[]
);
