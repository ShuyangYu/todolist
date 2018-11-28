import { CHANGE_INPUT_VALUE, CHANGE_LIST_ITEM, DELETE_LIST_ITEM, GET_AJAX_LIST_ITEM} from './actionTypes'


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

export const getAjaxItemListAction = (data) => ({
    type: GET_AJAX_LIST_ITEM,
    data
})
