import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setArray } from '../../redusers/array';
import { setAlgorithm } from '../../redusers/algorithm';
import { bubbleSort } from '../../algorithms/bubbleSort';
import { setRunning } from '../../redusers/isRunning';

import './controller.css';
import { setCurrentSorted } from '../../redusers/sorted';
import { mergeSort } from '../../algorithms/mergeSort';

const Controller = ({
	generateArray,
	updateAlgorithm,
	array,
	algorithm,
	sort,
	isRunning,
}) => {
	const handleSpeedAndSizeChange = (e) => {
		const size = Math.floor(parseInt(e.target.value) + 3) * 1.65;
		generateArray(size);
	};

	const handleClick = (algorithm) => {
		updateAlgorithm(algorithm);
	};

	const speed =
		570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;

	// useEffect(() => {
	// 	console.log(array);
	// }, [array]);

	useEffect(() => {
		generateArray(87);

		document.getElementById('changeSize').value = 50;
	}, [generateArray]);
	return (
		<div className="controller-container">
			<div
				className={isRunning ? 'disabled' : null}
				onClick={() => generateArray(array.length)}
			>
				Generate new Array
			</div>
			<div className="gap"></div>
			<div>Change Size And Speed</div>
			<input
				type="range"
				min="0"
				max="100"
				id="changeSize"
				disabled={isRunning ? 'disabled' : null}
				onChange={(e) => handleSpeedAndSizeChange(e)}
			></input>
			<div className="gap"></div>
			<div
				className="algorithmButton disabled"
				onClick={() => handleClick('mergeSort')}
			>
				Merge Sort
			</div>
			<div
				className="algorithmButton disabled"
				onClick={() => handleClick('quickSort')}
			>
				Quick Sort
			</div>
			<div
				className="algorithmButton disabled"
				onClick={() => handleClick('heapSort')}
			>
				Heap Sort
			</div>
			<div
				className="algorithmButton"
				onClick={() => handleClick('bubbleSort')}
			>
				Bubble Sort
			</div>
			<div className="gap"></div>
			<div onClick={() => sort('bubbleSort', array, speed)} id="start">
				sort
			</div>
		</div>
	);
};

const mapStateToProps = ({ array, algorithm, isRunning }) => ({
	array,
	algorithm,
	isRunning,
});
const mapDispatchToProps = (dispatch) => ({
	generateArray: (length) => {
		let array = [];
		while (array.length < length) {
			array.push(Math.floor(Math.random() * 200) + 10);
		}
		dispatch(setArray(array));
		dispatch(setCurrentSorted([]));
	},
	updateAlgorithm: (algotirhm) => {
		dispatch(setAlgorithm(algotirhm));
	},
	sort: (algorithm, array, speed) => {
		let doSort =
			algorithm === 'bubbleSort'
				? bubbleSort
				: algorithm === 'mergeSort'
				? mergeSort
				: null;

		dispatch(setCurrentSorted([]));
		dispatch(setRunning(true));
		doSort(array, dispatch, speed);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
