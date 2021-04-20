import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberPlayerEachTeam: 7,
    teams: {
        0: {
            kitColor: "#ffffff",
            players: Array(7)
                .fill("")
                .map((z, i) => {
                    return {
                        id: i,
                        kitNumber: null,
                        name: null,
                    };
                }),
        },
        1: {
            kitColor: "#FF0000",
            players: Array(7)
                .fill("")
                .map((z, i) => {
                    return {
                        id: i,
                        kitNumber: null,
                        name: null,
                    };
                }),
        },
    },
};

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        fieldChangeTeamKitColor(state, action) {
            const { kitColor, teamId } = action.payload;
            state.teams[teamId].kitColor = kitColor;
        },
        fieldSetNumberOfPlayerEachTeam(state, action) {
            const newNumberPlayerEachTeam = parseInt(action.payload);
            state.numberPlayerEachTeam = newNumberPlayerEachTeam;
            state.teams[0].players = Array(newNumberPlayerEachTeam)
                .fill("")
                .map((z, i) => {
                    return {
                        id: i,
                        kitNumber: null,
                        name: null,
                    };
                });
            state.teams[1].players = Array(newNumberPlayerEachTeam)
                .fill("")
                .map((z, i) => {
                    return {
                        id: i,
                        kitNumber: null,
                        name: null,
                    };
                });
        },
    },
});

export const {
    fieldChangeTeamKitColor,
    fieldSetNumberOfPlayerEachTeam,
} = fieldSlice.actions;

export default fieldSlice.reducer;
