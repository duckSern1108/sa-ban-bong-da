import React from "react";
import { playerChangeInfo } from "../../features/field/fieldSlice";
import { useDispatch } from "react-redux";
export default function PlayerInfoField({ id, teamId, setShowEditField }) {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            playerChangeInfo({
                name: e.target[0].value,
                kitNumber: e.target[1].value,
                id,
                teamId,
            })
        );
        setShowEditField(false);
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{
                padding: "1em",
                backgroundColor: "white",
                borderRadius: "20px",
            }}
        >
            <input type="text" name="name" placeholder="Name ..." />
            <br />
            <input
                type="number"
                name="kitNumber"
                placeholder="Kit number ..."
            />
<br />
            <button type="submit">Change</button>
        </form>
    );
}
