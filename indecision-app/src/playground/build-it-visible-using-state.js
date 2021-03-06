class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            };
        });
    }

    render() {
        return (
          <div>
              <h1>Visibility Toggle Using State</h1>
              <button onClick={ this.handleToggleVisibility }>{ this.state.visibility ? "Hide" : "Show"} Details</button>
              { this.state.visibility && (
                  <div>
                      <p>These are the details.</p>
                  </div>
              )}
          </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
