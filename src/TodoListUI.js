import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import './style.css';
import 'antd/dist/antd.css';


class TodoListUI extends Component {
    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input 
                    placeholder='todo info' 
                    value={this.props.inputValue} 
                    onChange={this.props.handleInputChange} 
                    style={{width: '300px', marginRight: '10px'}}
                />
                <Button type='primary' onClick={this.props.handleBtnClick}>submit</Button>

                    <List
                        style={{marginTop: '10px', width: '300px'}}
                        size="small"
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={() => {this.props.handleItemDelete(index)}}> { item } </List.Item>
                        )}
                    />
                <div> hello </div>
            </div>
        )
    }
}
export default TodoListUI;