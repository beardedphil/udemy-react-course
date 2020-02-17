let detailsHidden = true;

const onToggle = () => {
  detailsHidden = !detailsHidden;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ onToggle }>{ detailsHidden ? "Show" : "Hide"} Details</button>
            { !detailsHidden && <p>These are the details</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

