import React from 'react';
import { Input, Button, List } from 'antd';
import './style.css';
import 'antd/dist/antd.css';


const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <Input 
                placeholder='todo info' 
                value={props.inputValue} 
                onChange={props.handleInputChange} 
                style={{width: '300px', marginRight: '10px'}}
            />
            <Button type='primary' onClick={props.handleBtnClick}>submit</Button>

                <List
                    style={{marginTop: '10px', width: '300px'}}
                    size="small"
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {props.handleItemDelete(index)}}> { item } </List.Item>
                    )}
                />
            <div> hello </div>
        </div>
    )    
}

export default TodoListUI;