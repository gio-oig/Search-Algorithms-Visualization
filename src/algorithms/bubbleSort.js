import { setArray } from '../redusers/array';
import { setCurrentBubbleTwo } from '../redusers/bubbleSort';
import { setRunning } from '../redusers/isRunning';
import { setCurrentSorted } from '../redusers/sorted';
import { setCurrentSwapper } from '../redusers/swapper';

export const bubbleSort = (stateArray, dispatch, speed) => {
	let array = [...stateArray];
	let actionList = [];
	let sorted = false;
	let iteration = 0;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < array.length - 1 - iteration; i++) {
			actionList.push([i, i + 1]);
			if (array[i] > array[i + 1]) {
				actionList.push([i, i + 1, true]);
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				sorted = false;
				actionList.push([...array]);
				actionList.push([]);
			}
		}
		actionList.push([true, array.length - 1 - iteration]);
		iteration++;
	}
	handelDispatch(actionList, dispatch, array, speed);
};

const handelDispatch = (actionList, dispatch, array, speed) => {
	if (actionList.length === 0) {
		dispatch(setCurrentSorted(array.map((item, index) => index)));
		dispatch(setCurrentBubbleTwo([]));
		dispatch(setRunning(false));
		return;
	}

	let dispatchAction =
		actionList[0].length > 3
			? setArray
			: actionList[0].length === 3 || actionList[0].length === 0
			? setCurrentSwapper
			: actionList[0].length === 2 && typeof actionList[0][0] === 'boolean'
			? setCurrentSorted
			: setCurrentBubbleTwo;
	dispatch(dispatchAction(actionList.shift()));
	setTimeout(() => {
		handelDispatch(actionList, dispatch, array, speed);
	}, speed);
};
