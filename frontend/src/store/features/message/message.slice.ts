import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  messages: any;
};

const initialState: InitialStateType = {
  messages: [],
};

export const messageSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    getMessagesSuccess: (state, action) => {
      state.messages = action.payload;
    },
    postMessageSucess: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { getMessagesSuccess, postMessageSucess } = messageSlice.actions;

export default messageSlice.reducer;
