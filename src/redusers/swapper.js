import { createAction, handleActions } from 'redux-actions';

export const SET_CURRENT_SWAPPER = 'SET_CURRENT_SWAPPER';
export const setCurrentSwapper = createAction(SET_CURRENT_SWAPPER);

export const currentSwapper = handleActions(
	{
		SET_CURRENT_SWAPPER: (state, { payload }) => {
			if (payload.length) {
				return state.concat(payload);
			} else {
				return [];
			}
		},
	},
	[]
);
