import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 对父组件传递的props类型做强校验，函数或值


class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this); //性能有优化
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