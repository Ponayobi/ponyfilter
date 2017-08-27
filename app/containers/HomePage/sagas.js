import { take, cancel, put, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_PONY_REQUEST } from './constants';
import Pony from '../../assets/pony.json';
import { loadPonyFail, loadPonySuccess } from './actions';

export function* fetchPony() {
  try {
    yield put(loadPonySuccess(Pony));
  } catch (e) {
    yield put(loadPonyFail(e));
  }
}

export function* ponyWatcher() {
  const watchPony = yield takeLatest(LOAD_PONY_REQUEST, fetchPony);

  take(LOCATION_CHANGE);
  cancel(watchPony);
}

// All sagas to be loaded
export default [
  ponyWatcher,
];
