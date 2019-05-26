import soundsData from "../data/elements.json";

const initialState = {
	preset: true,
	soundsData: [...soundsData],
	selectedSound: "Test",
	isOn: true,
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
		default:
			newState = { ...state };
	}
	return newState;
};
export default reducer;
