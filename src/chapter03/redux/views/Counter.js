/**
 * Created by xizhixin on 2018/5/14.
 */
import React,{Component} from 'react';
import store from '../Store';
import * as Actions from '../Actions.js';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = this.getOwnState();

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
      }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    getOwnState() {
       return {
           value: store.getState()[this.props.caption]
       }
    }
    onIncrement() {
       store.dispatch(Actions.increment(this.props.caption))
    }

    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption))
    }

    render() {
        const value = this.state.value;
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }
}

export default Counter;