export const changePreset = preset => {
	return { type: "CHANGE_PRESET", payload: { preset } };
};
export const turnOnOff = (isOn, disabled) => {
	return { type: "ON/OFF", payload: { isOn, disabled } };
};
export const displaySound = selectedSound => {
	return { type: "DISPLAY_SOUND", payload: { selectedSound } };
};
