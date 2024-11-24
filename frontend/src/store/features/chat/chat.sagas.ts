import { put, call, takeLatest } from "redux-saga/effects";
import { chatActions } from "./chat.actions";
import { axiosInstance } from "@/utils/axios";
import {
  deleteChatSuccess,
  getChatsSuccess,
  postChatSuccess,
} from "./chat.slice";

// ##### GET #####
function* getChatsSaga() {
  try {
    const response: { data: {} } = yield call(axiosInstance.get, "/chat/");
    console.log(response.data);
    yield put(getChatsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherGetChatsSaga() {
  yield takeLatest(chatActions.GET_CHATS, getChatsSaga);
}

// ##### POST #####
function* postChatSaga() {
  try {
    const response: { data: {} } = yield call(axiosInstance.post, "/chat/", {
      title: "Neuer Chat",
    });
    yield put(postChatSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherPostChatSaga() {
  yield takeLatest(chatActions.POST_CHAT, postChatSaga);
}

// ##### DELETE #####
function* deleteChatSaga(action: { type: string; payload: string }) {
  try {
    yield call(axiosInstance.delete, `/chat/${action.payload}/`);
    yield put(deleteChatSuccess(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherDeleteChatSaga() {
  yield takeLatest(chatActions.DELETE_CHAT, deleteChatSaga);
}
