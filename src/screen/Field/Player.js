import React, { useState } from "react";
import PlayerInfoField from "./PlayerInfoField";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";
import useLongPress from "../../Hooks/useLongPress";
export default function Players({
    size = 30,
    kitNumber,
    name,
    kitColor,
    id,
    teamId,
    defaultPosition,
}) {
    const [showEditField, setShowEditField] = useState(false);
    const { showKitNumber, showPlayerName } = useSelector(
        (state) => state.field.viewFilter
    );
    const onLongPress = () => {
        setShowEditField(true);
    };
    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 1500,
    };
    const onClick = () => {}
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
    return (
        <Draggable handle="span">
            <div
                style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "move",
                    position: !!defaultPosition && "absolute",
                    top: !!defaultPosition && defaultPosition.top,
                    left: !!defaultPosition && defaultPosition.left,
                    color : "white"
                    // display : "inline-block"
                }}
            >
                <span
                    style={{
                        display: "block",
                        width: `${size}px`,
                        height: `${size}px`,
                        borderRadius: "50%",
                        backgroundColor: kitColor || "white",
                        textAlign: "center",
                        lineHeight: `${size}px`,
                    }}
                    {...longPressEvent}
                >
                    {showKitNumber && kitNumber && kitNumber}
                </span>
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
        </Draggable>
    );
}
