'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Nailed it.'

    // JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        ),
        React.createElement(
            'li',
            null,
            'Item 3'
        ),
        React.createElement(
            'li',
            null,
            'Item 4'
        )
    )
);
//
// let user = {
//     name: 'Phil King',
//     age: 38,
//     location: 'St. Louis, MO'
// };
//
// let templateTwo = (
//     <div>
//         <h1>{ user.name.toUpperCase() }</h1>
//         <p>Age: { user.age }</p>
//         <p>Location: { user.location }</p>
//     </div>
// );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
