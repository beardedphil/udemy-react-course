'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options.' : 'No options.'
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

// let user = {
//     name: 'Phil King',
//     age: 38,
//     location: 'St. Louis, MO',
// };
//
// function getLocation(location) {
//     if (location) {
//         return <p>Location: { location }</p>;
//     }
// }
//
// let templateTwo = (
//     <div>
//         <h1>{ user.name ? user.name : 'Anonymous' }</h1>
//         { (user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
