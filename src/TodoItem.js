import React, { Component } from 'react'

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
export default TodoItem;