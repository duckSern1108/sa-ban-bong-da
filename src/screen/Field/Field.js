import React, { useState } from "react";
import Background from "./Background";
import EditField from "./EditField";
import Player from "./Player";
import { useSelector } from "react-redux";
export default function Field() {
    const { color, teams, playerSize, ballColor, ballSize } = useSelector(
        (state) => state.field
    );
    const [showSetting, setShowSetting] = useState(false);
    return (
        <>
            <div
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    // margin : "5em auto",
                }}
            >
                {showSetting && (
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 50,
                            zIndex: 10000,
                        }}
                    >
                        <EditField />
                    </div>
                )}
                <Background color={color} />

                <button onClick={() => setShowSetting((s) => !s)}>
                    Setting
                </button>
                <div>
                    <Player
                        kitColor={ballColor}
                        size={ballSize}
                        defaultPosition={{ top: "50%", left: "50%" }}
                    />

                    {teams[0].players &&
                        teams[0].players.map((p, index) => (
                            <Player
                                {...p}
                                key={`${index} 0`}
                                teamId={0}
                                kitColor={teams[0].kitColor}
                                size={playerSize}
                            />
                        ))}
                    {teams[1].players &&
                        teams[1].players.map((p, index) => (
                            <Player
                                key={`${index} 1`}
                                {...p}
                                size={playerSize}
                                teamId={1}
                                kitColor={teams[1].kitColor}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}
