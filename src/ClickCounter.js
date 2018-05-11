/**
 * Created by xizhixin on 2018/5/7.
 */
import React, {Component} from 'react';
class ClickCounter extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            count: 0,
        };
        this.onClickButton = this.onClickButton.bind(this);
      }
      onClickButton(){
          this.setState({
              count: this.state.count + 1,
          })
      }

    render(){
          return(
              <div>
                  <button onClick={this.onClickButton}>点击我</button>
                  <div>
                      点击次数：{this.state.count}
                  </div>
              </div>
          )
    }
}

export default ClickCounter;