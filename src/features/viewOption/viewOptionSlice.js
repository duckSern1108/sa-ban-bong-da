import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fieldColor: "#6082f0",
    ballColor: "#000000",
    ballSize: 15,
    playerSize: 30,
    showKitNumber: false,
    showPlayerName: false,
};

const viewOptionSlice = createSlice({
    name: "viewOption",
    initialState,
    reducers: {
        viewOptionChangeBallSize(state, action) {
            state.ballSize = action.payload;
        },
        viewOptionChangeBallColor(state, action) {
            state.ballColor = action.payload;
        },
        viewOptionChangeColor(state, action) {
            state.fieldColor = action.payload;
        },
        viewOptionChangePlayerSize(state, action) {
            state.playerSize = parseInt(action.payload);
        },
        viewOptionChangeShowKitNumber(state, action) {
            state.showKitNumber = !state.showKitNumber;
        },
        viewOptionChangeShowPlayerName(state, action) {
            state.showPlayerName = !state.showPlayerName;
        },
    },
});

export const {
    viewOptionChangeBallColor,
    viewOptionChangeBallSize,
    viewOptionChangeColor,
    viewOptionChangePlayerSize,
    viewOptionChangeShowKitNumber,
    viewOptionChangeShowPlayerName,
} = viewOptionSlice.actions;

export default viewOptionSlice.reducer;
