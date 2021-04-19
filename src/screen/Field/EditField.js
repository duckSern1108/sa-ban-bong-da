import React from "react";
import {
    fieldChangeBallSize,
    fieldChangeBallColor,
    fieldChangeTeamKitColor,
    fieldChangeColor,
    fieldPlayerSize,
    fieldSetNumberOfPlayerEachTeam,
    viewFilterChangeShowKitNumber,
    viewFilterChangeShowPlayerName,
} from "../../features/field/fieldSlice";
import { useDispatch, useSelector } from "react-redux";
export default function EditField() {
    const dispatch = useDispatch();
    const { playerSize, color, teams, numberPlayerEachTeam,ballColor,ballSize,viewFilter : {
        showKitNumber, showPlayerName
    } } = useSelector(
        (state) => state.field
    );
    return (
        <div
            style={{
                padding: "1em",
                backgroundColor: "white",
                borderRadius: "20px",
            }}
        >
            <form>
                <label>Màu cỏ : </label>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => dispatch(fieldChangeColor(e.target.value))}
                    name="color"
                />
                <br />
                <label>Màu bóng : </label>
                <input
                    type="color"
                    value={ballColor}
                    onChange={(e) => dispatch(fieldChangeBallColor(e.target.value))}
                    name="ballColor"
                />
                <br />
                <label>Màu áo team 1 : </label>
                <input
                    type="color"
                    name="team1KitColor"
                    placeholder="Team 1 kit color"
                    value={teams[0].kitColor || "#000000"}
                    onChange={e => dispatch(fieldChangeTeamKitColor({
                        kitColor : e.target.value,
                        teamId : 0
                    }))}
                />
                <br />
                <label>Màu áo team 2 : </label>
                <input
                    type="color"
                    name="team2KitColor"
                    placeholder="Team 2 kit color"
                    value={teams[1].kitColor || "#000000"}
                    onChange={e => dispatch(fieldChangeTeamKitColor({
                        kitColor : e.target.value,
                        teamId : 1
                    }))}
                />
                <br />
                <label>Số cầu thủ mỗi đội : </label>
                <input
                    type="number"
                    name="numberPlayer"
                    value={numberPlayerEachTeam}
                    onChange={(e) =>
                        dispatch(fieldSetNumberOfPlayerEachTeam(e.target.value))
                    }
                />
                <br />
                <input
                    value={showKitNumber}
                    type="checkbox"
                    name="view kit number"
                    onChange={() => dispatch(viewFilterChangeShowKitNumber())}
                />
                <label>Hiện số áo cầu thủ</label>
                <input
                    value={showPlayerName}
                    type="checkbox"
                    name="view player name"
                    onChange={() => dispatch(viewFilterChangeShowPlayerName())}
                />

                <label>Hiện tên cầu thủ</label>
                <br />
                <label>Kích cỡ cầu thủ trên sân : </label>
                <input
                    type="range"
                    value={playerSize}
                    name="playerSize"
                    min={10}
                    max={100}
                    onChange={(e) =>
                        dispatch(fieldPlayerSize(parseInt(e.target.value)))
                    }
                />
                <br />
                <label>Kích cỡ bóng trên sân : </label>
                <input
                    type="range"
                    value={ballSize}
                    name="ballSize"
                    min={10}
                    max={100}
                    onChange={(e) =>
                        dispatch(fieldChangeBallSize(parseInt(e.target.value)))
                    }
                />
            </form>
        </div>
    );
}
