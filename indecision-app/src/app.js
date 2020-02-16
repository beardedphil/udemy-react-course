console.log('App.js is running!');

let app = {
    title: 'Indecision App',
    subtitle: 'Nailed it.'
}

// JSX - JavaScript XML
let template = (
    <div>
        <h1>{ app.title }</h1>
        <p>{ app.subtitle }</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ol>
    </div>
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

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);