import { connect } from 'react-redux';
import './body.css';
const Body = ({ array, currentBubbleTwo, currentSorted, currentSwapper }) => {
	const numWidth = Math.floor(document.body.clientWidth / (array.length * 3));
	const color = numWidth < 20 ? 'transparent' : 'white';

	return (
		<div className="visualizator-container">
			{array.length &&
				array.map((number, index) => {
					const backgoundColor = currentSwapper.includes(index)
						? 'rgba(219, 57, 57, 0.8)'
						: currentBubbleTwo.includes(index)
						? 'rgba(78, 216, 96, 0.8)'
						: currentSorted.includes(index)
						? 'rgba(169, 92, 232, 0.8)'
						: 'rgba(66, 134, 244, 0.8)';
					return (
						<div
							className="element"
							style={{
								height: `${number * 3}px`,
								width: `${numWidth}px`,
								color: color,
								backgroundColor: backgoundColor,
							}}
							key={index}
						>
							{number}
						</div>
					);
				})}
		</div>
	);
};

const mapStateToProps = ({
	array,
	currentBubbleTwo,
	currentSorted,
	currentSwapper,
}) => ({
	array,
	currentBubbleTwo,
	currentSorted,
	currentSwapper,
});

export default connect(mapStateToProps)(Body);
