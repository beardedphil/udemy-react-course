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

const onRemoveAll = () => {
    app.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(app.options.length * Math.random());
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p>{ app.subtitle }</p>}
            <p>{ (app.options && app.options.length > 0) ? 'Here are your options.' : 'No options.'}</p>
            <button disabled={ app.options.length === 0 } onClick={ onMakeDecision }>What should I do?</button>
            <button onClick={ onRemoveAll }>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{ option }</li>)
                }
            </ol>
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();