import React from "react";
import {
    fieldSetNumberOfPlayerEachTeam,
    fieldChangeTeamKitColor,
} from "../../features/fieldSlice";
import {
    viewOptionChangeBallColor,
    viewOptionChangeBallSize,
    viewOptionChangeColor,
    viewOptionChangePlayerSize,
    viewOptionChangeShowKitNumber,
    viewOptionChangeShowPlayerName,
} from "../../features/viewOptionSlice";
import { useDispatch, useSelector } from "react-redux";
export default function EditField() {
    const dispatch = useDispatch();
    const { teams, numberPlayerEachTeam } = useSelector((state) => state.field);
    const {
        playerSize,
        fieldColor,
        ballColor,
        ballSize,
        showKitNumber,
        showPlayerName,
    } = useSelector((state) => state.viewOption);
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
                    value={fieldColor}
                    onChange={(e) =>
                        dispatch(viewOptionChangeColor(e.target.value))
                    }
                    name="color"
                />
                <br />
                <label>Màu bóng : </label>
                <input
                    type="color"
                    value={ballColor}
                    onChange={(e) =>
                        dispatch(viewOptionChangeBallColor(e.target.value))
                    }
                    name="ballColor"
                />
                <br />
                <label>Màu áo team 1 : </label>
                <input
                    type="color"
                    name="team1KitColor"
                    placeholder="Team 1 kit color"
                    value={teams[0].kitColor || "#000000"}
                    onChange={(e) =>
                        dispatch(
                            fieldChangeTeamKitColor({
                                kitColor: e.target.value,
                                teamId: 0,
                            })
                        )
                    }
                />
                <br />
                <label>Màu áo team 2 : </label>
                <input
                    type="color"
                    name="team2KitColor"
                    placeholder="Team 2 kit color"
                    value={teams[1].kitColor || "#000000"}
                    onChange={(e) =>
                        dispatch(
                            fieldChangeTeamKitColor({
                                kitColor: e.target.value,
                                teamId: 1,
                            })
                        )
                    }
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
                    onChange={() => dispatch(viewOptionChangeShowKitNumber())}
                />
                <label>Hiện số áo cầu thủ</label>
                <input
                    value={showPlayerName}
                    type="checkbox"
                    name="view player name"
                    onChange={() => dispatch(viewOptionChangeShowPlayerName())}
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
                        dispatch(
                            viewOptionChangePlayerSize(parseInt(e.target.value))
                        )
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
                        dispatch(
                            viewOptionChangeBallSize(parseInt(e.target.value))
                        )
                    }
                />
            </form>
        </div>
    );
}
