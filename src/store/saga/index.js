import { take, put } from "redux-saga/effects";
import * as TYPES from "../action-types";

export default function* rootSaga() {
  console.log("rootSaga开始");
  for (let i = 0; i < 3; i++) {
    yield take(TYPES.ASYNC_ADD);
    console.log("此处模拟1s延迟");
    yield put({ type: TYPES.ADD });
  }
  console.log("rootSaga 结束");
}
