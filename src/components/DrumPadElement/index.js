import React from "react";
import { connect } from "react-redux";
import { displaySound } from "../../actions";

class DrumPadElement extends React.Component {
	render(props) {
		let sound = this.props.item;
		return (
			<div
				className={`drum-pad ui inverted secondary button huge ${
					this.props.disabled
				}`}
				onClick={() => {
					this.props.playSound(sound);
					this.props.displaySound(sound);
				}}
				key={sound.id}
				id={sound.name}>
				<audio
					className={`clip ${sound.name}`}
					src={sound.url}
					id={sound.name}
					volume={this.props.volume}
				/>
				{sound.name}
			</div>
		);
	}
}
const mapStateToProps = (state, props) => {
	return {
		volume: state.volume,
		playSound: state.playSound,
		isOn: state.isOn,
		disabled: state.disabled
	};
};

export default connect(
	mapStateToProps,
	{ displaySound }
)(DrumPadElement);
