import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'
// import store
// import Api from '...'

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getAjaxItemListAction);
}

function* getAjaxItemListAction() {
    try {
        const res = yield axios.get('/api/itemList');
        const action = initListAction(res.data);
        yield put(action);
    } catch {
        console.log('list.json 请求失败')
    }
}
export default todoSagas;