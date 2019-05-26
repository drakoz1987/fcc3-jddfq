import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";

//Main Redux Store Outlined Here!!!
import soundsData from "./data/elements.json";

const initialState = {
	preset: true,
	soundsData: [...soundsData],
	selectedSound: "Test",
	isOn: true,
	disabled: "",
	volume: 5,
	playSound: item => {
		let sound = document.querySelector(`.${item.name}`);
		sound.currentTime = 0;
		sound.play();
	}
};

const reducer = (state = initialState, action) => {
	let newState;

	switch (action.type) {
		case "CHANGE_PRESET":
			newState = {
				...state,
				preset: action.payload.preset === true ? false : true
			};
			break;
		case "DISPLAY_SOUND":
			newState = {
				...state,
				selectedSound: action.payload.selectedSound["tag"]
			};
			break;
		case "ON/OFF":
			newState = {
				...state,
				isOn: !action.payload.isOn,
				disabled: action.payload.isOn ? "disabled" : ""
			};
			break;
		default:
			newState = { ...state };
	}
	return newState;
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let container = document.querySelector("#root");
let whatToRender = (
	<Provider store={store}>
		<App />
	</Provider>
);
ReactDOM.render(whatToRender, container);
