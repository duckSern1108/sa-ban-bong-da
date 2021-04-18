import React, { useState } from "react";
import useMousePosition from "../../Hooks/useMousePostition";
import PlayerInfoField from "./PlayerInfoField";
import { useSelector } from "react-redux";
export default function Players({
    size = 30,
    kitNumber,
    position,
    name,
    kitColor,
    id,
    teamId,
}) {
    const [mousePosition, setIsNeeded] = useMousePosition();
    const { x, y } = mousePosition;
    const [showEditField, setShowEditField] = useState(false);
    const { showKitNumber, showPlayerName } = useSelector(
        (state) => state.field.viewFilter
    );
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                cursor: "pointer",
                top: y ? y - size / 2 : position ? position.y : 30,
                left: x ? x - size / 2  : position ? position.x : 30,
            }}
        >
            <div
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: "50%",
                    backgroundColor: kitColor || "white",
                    textAlign: "center",
                    lineHeight: `${size}px`,
                }}
                onMouseUp={() => setIsNeeded(false)}
                onMouseDown={() => {
                    setIsNeeded(true);
                }}
                onDoubleClick={() => setShowEditField(true)}
            >
                {showKitNumber && kitNumber && kitNumber}
            </div>
            {showPlayerName && name && <div>{name}</div>}
            {showEditField && (
                <div>
                    <PlayerInfoField
                        id={id}
                        teamId={teamId}
                        setShowEditField={setShowEditField}
                    />
                </div>
            )}
        </div>
    );
}
