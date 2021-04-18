import {
    createSlice,
} from "@reduxjs/toolkit";

const initialState = {
    color: "green", //mau` co?
    numberPlayerEachTeam: 7,
    teams: [],
    playerSize : 30,
    viewFilter : {
        showKitNumber : true,
        showPlayerName : true
    }
};
// Thunk functions
// export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
//     const response = await client.get("/fakeApi/todos");
//     return response.todos;
// });

// export const saveNewTodo = createAsyncThunk(
//     "todos/saveNewTodo",
//     async (text) => {
//         const initialTodo = { text };
//         const response = await client.post("/fakeApi/todos", {
//             todo: initialTodo,
//         });
//         return response.todo;
//     }
// );

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        fieldAddNewTeam(state, action) {
            const { kitColor } = action.payload;

            //them players vao moi team
            state.teams.push({
                kitColor,
                players: Array(state.numberPlayerEachTeam)
                .fill("")
                    .map((z, e) => {
                        return {
                            id: e,
                            kitNumber : e + 1,
                            name : null
                        };
                    }),
            });
        },
        fieldChangeColor(state, action) {
            state.color = action.payload;
        },
        fieldSetNumberOfPlayerEachTeam(state, action) {
            state.numberPlayerEachTeam = action.payload;
        },
        fieldPlayerSize(state,action) {
            state.playerSize = action.payload
        },
        playerChangeInfo(state,action) {
            const {name,kitNumber,id,teamId} = action.payload
            state.teams[teamId].players[id].name = name
            state.teams[teamId].players[id].kitNumber = kitNumber
        },
        viewFilterChangeShowKitNumber(state,action) {
            state.viewFilter.showKitNumber = !state.viewFilter.showKitNumber
        },
        viewFilterChangeShowPlayerName(state,action) {
            state.viewFilter.showPlayerName = !state.viewFilter.showPlayerName
        }
    },
});

export const {
    fieldAddNewTeam,
    fieldChangeColor,
    fieldSetNumberOfPlayerEachTeam,
    fieldPlayerSize,
    playerChangeInfo,
    viewFilterChangeShowKitNumber,
    viewFilterChangeShowPlayerName
} = fieldSlice.actions;

export default fieldSlice.reducer;
