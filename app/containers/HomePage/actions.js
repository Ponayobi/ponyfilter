import { LOAD_PONY_FAIL, LOAD_PONY_REQUEST, LOAD_PONY_SUCCESS } from './constants';

export function loadPonyRequest() {
  return {
    type: LOAD_PONY_REQUEST,
  };
}

export function loadPonySuccess(list) {
  return {
    type: LOAD_PONY_SUCCESS,
    list,
  };
}

export function loadPonyFail(msg) {
  return {
    type: LOAD_PONY_FAIL,
    msg,
  };
}
