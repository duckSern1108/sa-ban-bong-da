import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "#6082f0", 
    ballColor : "#000000",
    numberPlayerEachTeam: 7,
    ballSize : 15,
    teams: {
        0: {
            kitColor: "#ffffff",
            players: Array(7).fill({
                kitNumber: null,
                name: null,
            }),
        },
        1: {
            kitColor: "#FF0000",
            players: Array(7).fill({
                kitNumber: null,
                name: null,
            }),
        },
    },
    playerSize: 30,
    viewFilter: {
        showKitNumber: false,
        showPlayerName: false,
    },
};


const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        fieldChangeBallSize(state,action) {
            state.ballSize = action.payload
        },
        fieldChangeTeamKitColor(state, action) {
            const { kitColor, teamId } = action.payload;
            state.teams[teamId].kitColor = kitColor
        },
        fieldChangeBallColor(state,action) {
            state.ballColor = action.payload
        },
        fieldChangeColor(state, action) {
            state.color = action.payload;
        },
        fieldSetNumberOfPlayerEachTeam(state, action) {
            const newNumberPlayerEachTeam = parseInt(action.payload)
            state.numberPlayerEachTeam = newNumberPlayerEachTeam;
            state.teams[0].players = Array(newNumberPlayerEachTeam).fill({
                kitNumber: null,
                name: null,
            })
            state.teams[1].players = Array(newNumberPlayerEachTeam).fill({
                kitNumber: null,
                name: null,
            })
        },
        fieldPlayerSize(state, action) {
            state.playerSize = parseInt(action.payload);
        },
        playerChangeInfo(state, action) {
            const { name, kitNumber, id, teamId } = action.payload;
            state.teams[teamId].players[id].name = name;
            state.teams[teamId].players[id].kitNumber = kitNumber;
        },
        viewFilterChangeShowKitNumber(state, action) {
            state.viewFilter.showKitNumber = !state.viewFilter.showKitNumber;
        },
        viewFilterChangeShowPlayerName(state, action) {
            state.viewFilter.showPlayerName = !state.viewFilter.showPlayerName;
        },
    },
});

export const {
    fieldChangeBallSize,
    fieldChangeBallColor,
    fieldChangeTeamKitColor,
    fieldChangeColor,
    fieldSetNumberOfPlayerEachTeam,
    fieldPlayerSize,
    playerChangeInfo,
    viewFilterChangeShowKitNumber,
    viewFilterChangeShowPlayerName,
} = fieldSlice.actions;

export default fieldSlice.reducer;
