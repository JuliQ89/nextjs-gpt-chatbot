import { put, call, takeLatest } from "redux-saga/effects";
import { messageActions } from "./message.actions";
import { axiosInstance } from "@/utils/axios";
import { getMessagesSuccess, postMessageSucess } from "./message.slice";

// ##### GET #####
function* getMessagesSaga(action: { type: string; payload: string }) {
  try {
    const response: { data: {} } = yield call(
      axiosInstance.get,
      `/message/${action.payload}/`
    );
    console.log(response.data);
    yield put(getMessagesSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherGetMessagesSaga() {
  yield takeLatest(messageActions.GET_MESSAGES, getMessagesSaga);
}

// ##### POST #####
function* postMessageSaga(action: { type: string; payload: {} }) {
  try {
    const response: { data: {} } = yield call(
      axiosInstance.post,
      "/message/",
      action.payload
    );
    console.log(response.data);
    yield put(postMessageSucess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherPostMessageSaga() {
  yield takeLatest(messageActions.POST_MESSAGE, postMessageSaga);
}
