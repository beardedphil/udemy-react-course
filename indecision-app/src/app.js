console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: [],
};

// JSX - JavaScript XML

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
    }

    e.target.elements.option.value = '';
    renderIndecisionApp();
};

const onRemoveAll = (e) => {
    app.options = [];
    renderIndecisionApp();
}

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p>{ app.subtitle }</p>}
            <p>{ (app.options && app.options.length > 0) ? 'Here are your options.' : 'No options.'}</p>
            <p>{ app.options.length }</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ol>
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();