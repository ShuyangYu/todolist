const defaultState = {
    inputValue: '',
    list: ['learn', 'pratice']
} // 默认存储为空


// reducer 可以接受state，但是不能修改state
export default (state = defaultState, action) => {
    if (action.type === 'changeInputValue') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === 'changeListItem') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...newState.list, newState.inputValue];
        newState.inputValue = ''
        return newState;
    }

    if (action.type === 'deleteListItem') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}
// 