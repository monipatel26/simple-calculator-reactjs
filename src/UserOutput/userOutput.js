import React from 'react';

const userOutput = (props) => {
    return (
        <div className="user-output">
            <div className="input-expr">
                {props.inputv}
            </div>
            <div className="output-res">
                {props.result}
            </div>
        </div>
    );
}

export default userOutput;