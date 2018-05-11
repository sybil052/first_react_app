/**
 * Created by xizhixin on 2018/5/9.
 */
import React, {Component} from 'react';
import Counter from './Counter.js';

const style = {
    margin: '20px'
};

class ControlPanel extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.initValues = [ 0, 10, 20];
          const initSum = this.initValues.reduce((a, b) => a+b, 0);
          this.state = {
              sum: initSum
          };
          this.onCounterUpdate = this.onCounterUpdate.bind(this);
      }

    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({ sum: this.state.sum + valueChange});
    }


    render() {
        console.log('enter ControlPanel render');
        return(
            <div style={style}>
                <Counter onUpdate={this.onCounterUpdate} caption="First"/>
                <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]}/>
                <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]}/>
                <button
                    onClick={() => {
                        this.forceUpdate()
                    }
                }>点击我渲染</button>
                <hr/>
                <div>Total Count: {this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;