export const messageActions = {
  GET_MESSAGES: "GET_MESSAGES",
  POST_MESSAGE: "POST_MESSAGE",
};

export const getMessages = (payload: string) => ({
  type: messageActions.GET_MESSAGES,
  payload,
});

export const postMessage = (payload: {}) => ({
  type: messageActions.POST_MESSAGE,
  payload,
});
