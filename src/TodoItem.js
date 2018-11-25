import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 对父组件传递的props类型做强校验，函数或值


class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this); //性能有优化
    }

    // 当组件接收到父组件的参数，只要父组件的render函数执行，子组件的componentWillReceiveProps就会被执行
    componentWillReceiveProps() {
        console.log('TodoItem componentWillReceiveProps')
    }

    // 当这个组件即将从页面中剔除的时候会被执行
    componentWillUnmount() {
        console.log('TodoItem componentWillUnmount');
    }

    // 当父组件被渲染时，阻止子组件渲染，提高性能
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleClick} >
                {content}
            </div>
        )
    }

    handleClick() {
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }
}


TodoItem.propTypes = {
    test: PropTypes.string.isRequired, // 父组件没有向子组件传递该值，如果不加isRequired就不会去检验，有时父组件无法传递，就设置默认值
    content: PropTypes.string,
    handleItemDelete: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'default string',
}
export default TodoItem;