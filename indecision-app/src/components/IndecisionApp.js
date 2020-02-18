import React from 'react';

import AddOption from "./AddOption";
import Header from "./Header";
import Choose from "./Choose";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing - We want to load no options
        }

    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    componentWillUnmount() {
        console.log('componentWillUnmount');
    };

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick() {
        const randomNum = Math.floor(this.state.options.length * Math.random());
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add option.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This options already exists.'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header subtitle={ subtitle }/>
                <Choose
                    hasOptions={ this.state.options.length > 0 }
                    handlePick={ this.handlePick }
                />
                <Options
                    options={ this.state.options }
                    handleDeleteOptions={ this.handleDeleteOptions }
                    handleDeleteOption={ this.handleDeleteOption }
                />
                <AddOption
                    handleAddOption={ this.handleAddOption }
                />
            </div>
        );
    }
}
