import React from "react";

const Choose = (props) => (
    <div>
        <button
            className="big-button"
            disabled={ !props.hasOptions }
            onClick={ props.handlePick }
        >
            What should I do?
        </button>
    </div>
);

export default Choose;