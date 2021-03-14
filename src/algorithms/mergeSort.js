// import { setArray } from '../redusers/array';
// import { setCurrentBubbleTwo } from '../redusers/bubbleSort';
// import { setRunning } from '../redusers/isRunning';
// import { setCurrentSorted } from '../redusers/sorted';
// import { setCurrentSwapper } from '../redusers/swapper';

// export function mergeSort(arr, dispatch, speed) {
// 	if (arr.length < 2) return arr;
// 	let actionList = [];
// 	let final = helper(
// 		arr.map((num, idx) => [num, idx]),
// 		actionList
// 	);
// 	handleDispatch(actionList, dispatch, speed);
// 	// return merge(mergeSort(left), mergeSort(right));
// }

// const helper = (arr, actionList) => {
// 	if (arr.length < 2) return arr;

// 	let middle = Math.floor(arr.length / 2);
// 	let left = arr.slice(0, middle);
// 	let right = arr.slice(middle);

// 	return merge(helper(left, actionList), helper(right, actionList), actionList);
// };
// function merge(left, right, actionList) {
// 	let result = [],
// 		i = 0,
// 		j = 0;
// 	actionList.push(left[0][1], right[0][1]);
// 	while (i < left.length && j < right.length) {
// 		if (left[0][i] < right[0][j]) {
// 			result.push(left[0][i++]);
// 		} else {
// 			result.push(right[0][j++]);
// 			actionList.push([left[0][1], right[0][1], true]);
// 		}
// 	}
// 	actionList.push([]);

// 	return result.concat(left.slice(i)).concat(right.slice(j));
// }

// const handleDispatch = (actionList, dispatch, array, speed) => {
// 	if (actionList.length === 0) {
// 		// dispatch(setCurrentSorted(array.map((item, index) => index)));
// 		// dispatch(setCurrentBubbleTwo([]));
// 		// dispatch(setRunning(false));
// 		return;
// 	}

// 	let dispatchAction =
// 		actionList[0].length > 3
// 			? setArray
// 			: actionList[0].length === 3 || actionList[0].length === 0
// 			? setCurrentSwapper
// 			: actionList[0].length === 2 && typeof actionList[0][0] === 'boolean'
// 			? setCurrentSorted
// 			: setCurrentBubbleTwo;
// 	dispatch(dispatchAction(actionList.shift()));
// 	setTimeout(() => {
// 		handleDispatch(actionList, dispatch, array, speed);
// 	}, speed);
// };
