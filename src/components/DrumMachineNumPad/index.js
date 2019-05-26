import React, { Component } from "react";
import { connect } from "react-redux";
import DrumPadElement from "../DrumPadElement";
import { displaySound } from "../../actions";

class DrumMachineNumPad extends Component {
	//i tried doing it with React syntetic events, but at the end it was better to handle it the vanilla way...
	execute = (sound, playSound, displaySound) => {
		displaySound(sound);
		playSound(sound);
	};
	componentDidMount = () => {
		document.addEventListener("keydown", event => {
			let key = event.key.toUpperCase();
			if (
				key === "Q" ||
				key === "W" ||
				key === "E" ||
				key === "A" ||
				key === "S" ||
				key === "D" ||
				key === "Z" ||
				key === "X" ||
				key === "C"
			) {
				let sound = this.props.soundsData[
					this.props.preset ? 0 : 1
				].sounds.filter(item => item.name === key);
				console.log(sound);
				if (this.props.isOn) {
					this.execute(sound[0], this.props.playSound, this.props.displaySound);
				}
			}
		});
	};
	render() {
		let toRender;
		switch (this.props.preset) {
			case true:
				toRender = this.props.soundsData[0].sounds.map(item => {
					return <DrumPadElement key={item.id} item={item} />;
				});
				break;
			case false:
				toRender = this.props.soundsData[1].sounds.map(item => {
					return <DrumPadElement key={item.id} item={item} />;
				});
				break;

			default:
				toRender = <div>No Data</div>;
		}
		return <div className="drum-pad__container">{toRender}</div>;
	}
}
const mapStateToProps = (state, props) => {
	return {
		preset: state.preset,
		soundsData: state.soundsData,
		playSound: state.playSound,
		isOn: state.isOn
	};
};

export default connect(
	mapStateToProps,
	{ displaySound }
)(DrumMachineNumPad);
