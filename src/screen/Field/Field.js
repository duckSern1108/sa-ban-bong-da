import React, { useState } from "react";
import Background from "./Background";
import EditField from "./EditField";
import Player from "./Player";
import { useSelector } from "react-redux";
export default function Field() {
    const { color, teams, playerSize } = useSelector((state) => state.field);
    const [showSetting, setShowSetting] = useState(false);
    return (
        <>
            <div
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
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
                <Background
                    color={color}
                  
                />

                <button onClick={() => setShowSetting((s) => !s)}>
                    Setting
                </button>
                <Player
                    kitColor="black"
                    position={{ x: "50%", y: "50%" }}
                    size={15}
                   
                />

                {teams[0] &&
                    teams[0].players.map((p) => (
                        <Player
                            {...p}
                            key={p.id}
                            teamId={0}
                            kitColor={teams[0].kitColor}
                            size={playerSize}
                        />
                    ))}
                {teams[1] &&
                    teams[1].players.map((p) => (
                        <Player
                            key={p.id}
                            {...p}
                            size={playerSize}
                            teamId={1}
                            kitColor={teams[1].kitColor}
                        />
                    ))}
            </div>
        </>
    );
}
