import React from "react";

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <p>This is from my edit expense</p>
            <p>Editing expense id - { props.match.params.id }</p>
        </div>
    );
};

export default EditExpensePage;