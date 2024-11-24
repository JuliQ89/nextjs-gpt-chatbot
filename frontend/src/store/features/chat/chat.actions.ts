export const chatActions = {
  GET_CHATS: "GET_CHATS",
  POST_CHAT: "POST_CHAT",
  DELETE_CHAT: "DELETE_CHAT",
};

export const getChats = () => ({
  type: chatActions.GET_CHATS,
});

export const postChat = () => ({
  type: chatActions.POST_CHAT,
});

export const deleteChat = (payload: string) => ({
  type: chatActions.DELETE_CHAT,
  payload,
});
