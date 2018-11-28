import { CHANGE_INPUT_VALUE, CHANGE_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios'


export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: CHANGE_LIST_ITEM,
})

export const getItemDeleteAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getAjaxItemListAction = () => {
    return (dispatch) => {
        axios.get('/api/itemList')
        .then((res) => {
            const data = res.data;
            const action = initListAction(data);
            // console.log(action);
            dispatch(action);
        })
    }
}
