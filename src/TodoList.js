import React, { Component, Fragment } from 'react'

class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <div><input /> <button>submit</button></div>
                <ul>
                    <li>learn</li>
                    <li>pratice</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;