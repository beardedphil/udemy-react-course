import React from "react";

const Choose = (props) => {
    return (
        <div>
            <button
                disabled={ !props.hasOptions }
                onClick={ props.handlePick }
            >
                What should I do?
            </button>
        </div>
    );
};

export default Choose;