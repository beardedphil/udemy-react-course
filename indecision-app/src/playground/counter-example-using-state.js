class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            }
        });
        console.log('handleAddOne');
    }

    handleSubtractOne() {
        this.setState((prevState) => {
           return {
               count: prevState.count - 1,
           }
        });
        console.log('handleSubtractOne');
    }

    handleReset() {
        this.setState(() => {
           return {
               count: 0,
           }
        });
        console.log('handleReset');
    }

    render() {
        return (
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick={ this.handleAddOne }>+1</button>
                <button onClick={ this.handleSubtractOne }>-1</button>
                <button onClick={ this.handleReset }>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const subtractOne= () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: { count }</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subtractOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateTwo, appRoot);
// }
//
// renderCounterApp();

