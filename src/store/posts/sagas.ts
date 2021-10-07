import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import { GET_POST_LIST } from './actionTypes';
import { getPostListSuccess } from './actions';

const getPosts = () =>
  axios.get<any[]>('https://jsonplaceholder.typicode.com/posts');

/*
  Worker Saga: Fired on FETCH_POST_LIST action
*/
function* fetchPostsSaga(): SagaIterator {
  try {
    const response = yield call(getPosts);
    yield put(
      getPostListSuccess({
        posts: response.data,
      })
    );
  } catch (e: any) {
    console.log(e);
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_POST_LIST` action.
*/
function* postsSaga() {
  yield all([takeLatest(GET_POST_LIST, fetchPostsSaga)]);
}

export default postsSaga;
