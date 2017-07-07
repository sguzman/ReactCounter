const CounterDisplay = React.createClass({
    propTypes: {
        counterProp: React.PropTypes.number.isRequired,
        inc: React.PropTypes.func.isRequired,
        dec: React.PropTypes.func.isRequired
    },

    render: function () {
        return React.createElement('div', {id: 'react-body'},
            React.createElement('h2', null, this.props.counterProp),
            React.createElement('div', null,
                React.createElement('button', {onClick: this.props.inc}, '+'),
                React.createElement('button', {onClick: this.props.dec}, '-')
            )
        )
    }
});

const Counter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React Counter'
        }
    },

    getInitialState: function () {
        return {
            counter: 0
        }
    },

    inc: function () {
        this.setState({counter: this.state.counter + 1});
    },

    dec: function () {
        this.setState({counter: this.state.counter - 1});
    },

    render: function () {
        return React.createElement('div', {},
            React.createElement('h1', {}, this.props.name),
            React.createElement(CounterDisplay, {counterProp: this.state.counter, inc: this.inc, dec: this.dec})
        )
    }
});

ReactDOM.render(
    React.createElement(Counter), document.getElementById('react-mount-point')
);
