import React, { Component } from 'react'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick= this.handleClick.bind(this)//性能有优化
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        )
    }

    handleClick() {
        this.props.handleItemDelete(this.props.index)
    }
}
export default TodoItem;