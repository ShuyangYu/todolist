import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';


class TodoList extends Component {

    constructor(props) {
        super(props);//由于使用了extends，这里的super代表父类
        this.state = {
            inputValue : '',
            list : [],
        }//数据要定义在状态里

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)

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
                        onChange={this.handleInputChange}
                    /> 
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div 
                    key={index}
                >
                    {/*  <li 
                        key={index} 
                        // 循环渲染时，需要给每一项增加key值，但是不太好
                        onClick={this.handleItemDelete.bind(this, index)}
                        dangerouslySetInnerHTML={{__html: item}} // 可以在提交框内输入html标签
                    >
                    { {item} }
                    </li> */}
                    <TodoItem 
                        content={item}  
                        index={index}
                        handleItemDelete={this.handleItemDelete} 
                    />{/* 父组件将item利用属性的方式传递给子组件，名称为item， 父组件将handleItemDelete这个方法利用属性的方式传递给子组件，使子组件能够调用父组件的方法*/ }
                    {/* this.handleItemDelete是父组件的方法，因此子组件在调用时需要绑定this*/ }
                </div>
            )
        })
    }

    handleInputChange(e) {
        // 新版react支持写法, 变成异步，提升性能
        const value = e.target.value;
        this.setState(() => ({
            inputValue : value
        }))
        // this.setState({
        //     inputValue : e.target.value
        // })
    }
    handleBtnClick() {
        // setState 可接受参数 prevState, 存放修改数据之前的数据
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }
    handleItemDelete(index) {
        // immutable state 不允许任何改变

        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list} //es6
        });
        // this.setState({
        //     list: list
        // })
        }
}

export default TodoList;