import React, { Component } from "react";
import { connect } from "react-redux";
import { changePreset, turnOnOff } from "../../actions";

class DrumMachineDisplay extends Component {
	state = {};
	componentDidMount = () => {};
	handleChange = e => {
		this.props.changePreset(this.props.preset);
	};
	handleChangeOnOff = e => {
		this.props.turnOnOff(this.props.isOn, this.props.disabled);
	};

	render = props => {
		return (
			<div className="ui card" id="card">
				<div
					className="content drum-machine-display__container"
					id="drum-display-container">
					<div id="display" className="header drum-machine-display">
						<p className="showed">{this.props.selectedSound}</p>
					</div>
				</div>
				<div className="ui small feed">
					<div className="event" id="power">
						<div className="content-switch">
							<span className="ui label">Alt</span>
							<label className="switch">
								<input
									type="checkbox"
									defaultChecked={this.props.preset}
									onChange={this.handleChange}
								/>
								<span className="slider" />
							</label>

							<span className="ui label">Bas</span>
						</div>
					</div>
				</div>
				<div className="ui small feed">
					<div className="event" id="changeBeat">
						<div className="content-switch">
							<span className="ui label">Off</span>
							<label className="switch">
								<input
									type="checkbox"
									defaultChecked={this.props.isOn}
									onChange={this.handleChangeOnOff}
								/>
								<span className="slider" />
							</label>
							<span className="ui label">On</span>
						</div>
					</div>
				</div>
			</div>
		);
	};
}
const mapStateToProps = (state, props) => {
	return {
		preset: state.preset,
		selectedSound: state.selectedSound,
		isOn: state.isOn,
		disabled: state.disabled
	};
};

export default connect(
	mapStateToProps,
	{ changePreset, turnOnOff }
)(DrumMachineDisplay);
