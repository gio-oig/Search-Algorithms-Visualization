import { combineReducers } from 'redux';
import { array } from './array';
import { algorithm } from './algorithm';
import { currentBubbleTwo } from './bubbleSort';
import { currentSorted } from './sorted';
import { currentSwapper } from './swapper';
import { isRunning } from './isRunning';

export default combineReducers({
	array,
	algorithm,
	currentBubbleTwo,
	currentSorted,
	currentSwapper,
	isRunning,
});
