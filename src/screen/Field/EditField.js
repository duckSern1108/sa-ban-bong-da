import React from "react";
import {
    fieldAddNewTeam,
    fieldChangeColor,
    fieldPlayerSize,
    fieldSetNumberOfPlayerEachTeam,
    viewFilterChangeShowKitNumber,
    viewFilterChangeShowPlayerName,
} from "../../features/field/fieldSlice";
import { useDispatch, useSelector } from "react-redux";
export default function EditField() {
    const dispatch = useDispatch();
    const { showKitNumber, showPlayerName } = useSelector(
        (state) => state.field.viewFilter
    );
    const playerSize = useSelector(state => state.field.playerSize)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fieldChangeColor(e.target[0].value));
        dispatch(
            fieldAddNewTeam({
         
                kitColor: e.target[1].value,
            })
        );
        dispatch(
            fieldAddNewTeam({
 
                kitColor: e.target[2].value,
            })
        );
        dispatch(fieldSetNumberOfPlayerEachTeam(parseInt(e.target[3].value)));
        
    };
    return (
        <div
            style={{
                padding: "1em",
                backgroundColor: "white",
                borderRadius: "20px",
            }}
        >
            <form onSubmit={handleSubmit}>
                <input type="text" name="color" placeholder="Color ..." />
                <input
                    type="text"
                    name="team1KitColor"
                    placeholder="Team 1 kit color"
                />
                <input
                    type="text"
                    name="team2KitColor"
                    placeholder="Team 2 kit color"
                />
                <input
                    type="number"
                    name="numberPlayer"
                    placeholder="Number of players each team"
                />
                
                <button type="submit">Change</button>
            </form>
            <input
                defaultChecked={showKitNumber}
                type="checkbox"
                name="view kit number"
                onChange={() => dispatch(viewFilterChangeShowKitNumber())}
            />
            <label>View kit number</label>
            <input
                defaultChecked={showPlayerName}
                type="checkbox"
                name="view player name"
                onChange={() => dispatch(viewFilterChangeShowPlayerName())}
            />
            
            <label>View player name</label>
            <input type="range" defaultValue={playerSize} name="playerSize" min={10} max={50} onChange={(e) => dispatch(fieldPlayerSize(parseInt(e.target.value)))}/>
        </div>
    );
}
