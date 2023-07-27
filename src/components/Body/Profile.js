import React from "react";

const Profile = (props) => {
    return (
        <div>
            <h2>Profile component</h2>
            <p>Hi there {props.name}</p>
        </div>
    )
}

export default Profile;