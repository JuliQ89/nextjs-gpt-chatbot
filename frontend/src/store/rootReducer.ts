import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "./features/chat/chat.slice";
import messageReducer from "./features/message/message.slice";

export const rootReducer = combineReducers({
  chat: chatReducer,
  message: messageReducer,
});
