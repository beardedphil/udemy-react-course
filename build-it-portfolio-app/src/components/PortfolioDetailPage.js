import React from "react";

const PortfolioDetailPage = (props) => (
    <div>
        <h1>A Thing I've Done</h1>
        <p>This is the detail page for id: { props.match.params.id }</p>
    </div>
);

export default PortfolioDetailPage;
