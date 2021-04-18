import React from "react";
export default function Background({color,team1Name,team2Name}) {
    const style = {
        backgroundColor: color || "green",
        flex: 1,
        height: "100%",
        alignItems: "center",
        display: "flex",
        
    };
    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                zIndex: -10000,
            }}
        >
            <div style={style}>
                <div
                    style={{
                        width: "3vw",
                        height: "20%",
                        // backgroundColor: "white",
                        border : "5px solid white",
                        borderLeft : "none"
                    }}
                ></div>
            </div>
            <div
                style={{
                    width: "10px",
                    height: "100%",
                    backgroundColor: "white",
                }}
            ></div>
            <div style={{ ...style, justifyContent: "flex-end" }}>
                <div
                    style={{
                        width: "3vw",
                        height: "20%",
                        // backgroundColor: "white",
                        border : "5px solid white",
                        borderRight : "none"
                    }}
                ></div>
            </div>
        </div>
    );
}
