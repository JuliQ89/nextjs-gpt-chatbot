import { all } from "redux-saga/effects";
import {
  watcherGetChatsSaga,
  watcherPostChatSaga,
  watcherDeleteChatSaga,
} from "./features/chat/chat.sagas";
import {
  watcherGetMessagesSaga,
  watcherPostMessageSaga,
} from "./features/message/message.sagas";

export function* rootSaga() {
  yield all([
    watcherGetChatsSaga(),
    watcherPostChatSaga(),
    watcherDeleteChatSaga(),
    watcherGetMessagesSaga(),
    watcherPostMessageSaga(),
  ]);
}
