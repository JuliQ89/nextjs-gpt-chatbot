import { ChatType } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  chats: any;
};

const initialState: InitialStateType = {
  chats: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    getChatsSuccess: (state, action) => {
      state.chats = action.payload;
    },
    postChatSuccess: (state, action) => {
      state.chats.push(action.payload);
    },
    deleteChatSuccess: (state, action) => {
      state.chats = state.chats.filter(
        (chat: ChatType) => chat.id !== action.payload
      );
    },
  },
});

export const { getChatsSuccess, postChatSuccess, deleteChatSuccess } =
  chatSlice.actions;

export default chatSlice.reducer;
