const defaultState = {
    inputValue: 'your to do list',
    list: ['learn', 'pratice']
} // 默认存储为空


// reducer 可以接受state，但是不能修改state
export default (state = defaultState, action) => {
    if (action.value === 'changeInputValue') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    console.log(state, action)
    return state;
}
// 