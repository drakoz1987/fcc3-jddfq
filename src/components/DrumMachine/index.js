import React, { Component } from "react";

import DrumMachineNumPad from "../DrumMachineNumPad";
import DrumMachineDisplay from "../DrumMachineDisplay";

class DrumMachine extends Component {
	render = () => {
		return (
			<div id="drum-machine" className="drum-machine">
				<DrumMachineNumPad />
				<DrumMachineDisplay />
			</div>
		);
	};
}

export default DrumMachine;
