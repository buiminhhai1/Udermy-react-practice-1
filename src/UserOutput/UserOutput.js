import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <h2>UserOutput here:</h2>
            <p>{props.username}</p>
        </div>
    );
}
export default UserOutput;