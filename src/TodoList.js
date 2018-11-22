import React, { Component, Fragment } from 'react'

class TodoList extends Component {

    constructor(props) {
        super(props);//由于使用了extends，这里的super代表父类
        this.state = {
            inputValue : '',
            list : []
        }//数据要定义在状态里
    }
    render() {
        return (
            //定义inputValue之后输入框中的内容不再变化
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange.bind(this)}
                    /> 
                    <button>submit</button>
                </div>
                <ul>
                    <li>learn</li>
                    <li>pratice</li>
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue : e.target.value
        })
    }
}

export default TodoList;