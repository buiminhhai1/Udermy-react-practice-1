import React from 'react';

const UserInput = (props) =>{
    return(
        <div>
            <h2>UserInput Here:</h2>
            <input type="text" onChange={props.changed} value={props.username}></input>
        </div>

    );
}
export default UserInput;