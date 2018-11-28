import React, { Component } from 'react';
// import TodoItem from './TodoItem';
import store from './store'
import { getInputChangeAction, getAddItemAction, getItemDeleteAction, getAjaxItemListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);

        store.subscribe(this.handleStoreChange);
    }

    render() {
        return <TodoListUI 
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleInputChange={this.handleInputChange}
                    handleStoreChange={this.handleStoreChange}
                    handleBtnClick={this.handleBtnClick}
                    handleItemDelete={this.handleItemDelete}
                />
    }

    componentDidMount() {
        const action = getAjaxItemListAction();
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getItemDeleteAction(index);
        store.dispatch(action); 
    }
}

export default TodoList;
/*
class TodoList extends Component {

    constructor(props) {
        super(props);//由于使用了extends，这里的super代表父类
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        // 当父组件的rendre函数被运行时，他的子组件的render函数也将被重新运行一次
        this.state = {
            inputValue : '',
            list : [],
        }//数据要定义在状态里

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)

    }
    // 生命周期函数
    // 当组件即将被挂载到页面的时候自动执行
    componentWillMount() {
        console.log('componentWillMount');
    }

    // 当组件被挂载到页面的时候自动执行,用来发送ajax请求
    componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                this.setState(() => ({
                    list: [...res.data]
                })
            )})
            .catch(() => {alert('error')})
        console.log('componentDidMount');
    }

    // 组件被更新之前自动执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true; // 若返回false则组件不会更新
    }

    // 组件被更新之前自动执行, shouldComponentUpdate返回True之后执行
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // 组件执行完之后
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render')
        return (
            //定义inputValue之后输入框中的内容不再变化
            <Fragment>
                <label htmlFor='insertArea'>输入内容</label>
                <div>
                    <input 
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
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
                    </li> }
                    <TodoItem 
                        content={item}  
                        index={index}
                        handleItemDelete={this.handleItemDelete} 
                    />{/* 父组件将item利用属性的方式传递给子组件，名称为item， 父组件将handleItemDelete这个方法利用属性的方式传递给子组件，使子组件能够调用父组件的方法 }
                    {/* this.handleItemDelete是父组件的方法，因此子组件在调用时需要绑定this }
                </div>
            )
        })
    }

    handleInputChange() {
        // 新版react支持写法, 变成异步，提升性能
        const value = this.input.value;
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

*/