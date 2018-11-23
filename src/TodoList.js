import React, { Component, Fragment } from 'react'
import './style.css'
class TodoList extends Component {

    constructor(props) {
        super(props);//由于使用了extends，这里的super代表父类
        this.state = {
            inputValue : '',
            list : ['ni', 'hao'],
        }//数据要定义在状态里
    }
    render() {
        return (
            //定义inputValue之后输入框中的内容不再变化
            <Fragment>{/* 是一个组件*/}
                <label htmlFor='insertArea'>输入内容</label>
                <div>
                    <input 
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange.bind(this)}
                    /> 
                    <button onClick={this.handleBtnClick.bind(this)}>submit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li 
                                    key={index} 
                                    // 循环渲染时，需要给每一项增加key值，但是不太好
                                    onClick={this.handleItemDelete.bind(this, index)}
                                    dangerouslySetInnerHTML={{__html: item}} // 可以在提交框内输入html标签
                                >
                                {/* {item} */}
                                </li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue : e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        // immutable state 不允许任何改变
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list
        })
        }
}

export default TodoList;